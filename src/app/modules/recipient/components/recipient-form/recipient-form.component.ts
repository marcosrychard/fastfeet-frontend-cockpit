import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
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
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipientService: RecipientService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private buildForm() {
    this.recipientForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      zipcode: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  public onSubmit(event: string) {
    if (this.recipientForm.valid) {
      if (event === TypeActionEnum.CREATE) {
        this.create(this.recipientForm.value);
      } else if (event === TypeActionEnum.UPDATE) {
        this.update(this.recipientForm.value);
      }
    }
  }

  public update(data: any) {
    this.recipientService.updateRecipient(data);
  }

  public create(data: any) {
    this.recipientService.createRecipient(this.preparetObjTosave(data));
  }

  private preparetObjToGet(data: any) {
    return {
      id: data.id,
      name: data.name,
      street: data.street,
      number: data.number,
      complement: data.complement,
      zipcode: data.zipcode,
      state: data.state,
      city: data.city,
    };
  }

  private preparetObjTosave(data: any) {
    return {
      name: data.name,
      street: data.street,
      number: data.number,
      complement: data.complement,
      zipcode: data.zipcode,
      state: data.state,
      city: data.city,
    };
  }

  private findDeliveryById(id: string) {
    this.subscriptions.add(
      this.recipientService.findByRecipientId(id).subscribe((res) => {
        if (res) {
          this.setValueForm(res);
        }
      })
    );
  }

  private setValueForm(res: any) {
    this.recipientForm.setValue(this.preparetObjToGet(res));
    this.typeAction = TypeActionEnum.UPDATE;
  }
}
