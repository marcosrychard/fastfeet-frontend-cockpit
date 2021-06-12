import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { RecipientRequestModel } from 'src/app/shared/models/request/recipient-request.model';
import { RecipientViewModel } from 'src/app/shared/models/view-models/recipient-view-model';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.scss'],
})
export class RecipientFormComponent implements OnInit, OnDestroy {
  public recipientForm: FormGroup;
  public typeAction = TypeActionEnum.CREATE;

  private id: string;
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipientService: RecipientService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.buildForm();
    this.findDeliveryById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(event: string) {
    if (this.recipientForm.valid) {
      const data = new RecipientRequestModel(this.recipientForm.value);

      if (event === TypeActionEnum.CREATE) {
        this.createRecipient(data);
      } else {
        this.updateRecipient(data);
      }

      this.goList();
    }
  }

  goList() {
    this.router.navigate(['/panel/recipient/list']);
  }

  updateRecipient(data: RecipientRequestModel) {
    this.recipientService
      .updateRecipient(data)
      .subscribe((res: RecipientViewModel) => {
        console.log('createRecipient', res);
      });
  }

  createRecipient(data: RecipientRequestModel) {
    this.recipientService
      .createRecipient(data)
      .subscribe((res: RecipientViewModel) => {
        console.log('createRecipient', res);
      });
  }

  findDeliveryById(id: string) {
    this.loadingService.show();
    if (id) {
      this.subscriptions.add(
        this.recipientService.findByRecipientId(id).subscribe(
          (res: RecipientRequestModel) => {
            if (res) {
              this.recipientForm.setValue(new RecipientRequestModel(res));
              this.typeAction = TypeActionEnum.UPDATE;
              this.loadingService.stop();
            }
          },
          (error) => {
            this.loadingService.stop();
          }
        )
      );
    }
  }

  buildForm() {
    this.recipientForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      street: ['', Validators.required],
      address_number: ['', Validators.required],
      complement: ['', Validators.required],
      zipcode: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
}
