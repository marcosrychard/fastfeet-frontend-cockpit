import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { RecipientRequestModel } from 'src/app/shared/models/request/recipient-request.model';
import { RecipientViewModel } from 'src/app/shared/models/view-models/recipient-view-model';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.scss'],
})
export class RecipientFormComponent implements OnInit, OnDestroy {
  public loading = true;
  public recipientForm: FormGroup;
  public typeAction = TypeActionEnum.CREATE;

  private id = this.route.snapshot.params.id;
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipientService: RecipientService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.findDeliveryById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit(event: string) {
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

  public goList() {
    this.router.navigate(['/cockpit/recipient/list']);
  }

  private updateRecipient(data: RecipientRequestModel) {
    this.recipientService
      .updateRecipient(data)
      .subscribe((res: RecipientViewModel) => {
        console.log('createRecipient', res);
      });
  }

  private createRecipient(data: RecipientRequestModel) {
    this.recipientService
      .createRecipient(data)
      .subscribe((res: RecipientViewModel) => {
        console.log('createRecipient', res);
      });
  }

  private findDeliveryById(id: string) {
    if (id) {
      this.subscriptions.add(
        this.recipientService.findByRecipientId(id).subscribe(
          (res: RecipientRequestModel) => {
            if (res) {
              this.recipientForm.setValue(new RecipientRequestModel(res));
              this.typeAction = TypeActionEnum.UPDATE;
              this.loading = false;
            }
          },
          (error) => {
            this.loading = false;
          }
        )
      );
    }
  }

  private buildForm() {
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
