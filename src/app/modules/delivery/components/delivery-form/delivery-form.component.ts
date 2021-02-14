import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, forkJoin, of } from 'rxjs';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { catchError, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliveryRequestModel } from 'src/app/shared/models/request/delivery-request.model';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit, OnDestroy {
  public deliverymans = [];
  public recipients = [];
  public loading = true;
  public deliveryForm: FormGroup;
  public typeAction = TypeActionEnum.CREATE;
  private subscriptions = new Subscription();
  private id = this.route.snapshot.params.id;

  constructor(
    private fb: FormBuilder,
    private recipientService: RecipientService,
    private deliverymanService: DeliverymanService,
    private deliveryService: DeliveryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.forkJoinCall();
    this.findDeliveryById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public get f() {
    return this.deliveryForm.controls;
  }


  public onSubmit(event: string) {
    if (this.deliveryForm.valid) {
      if (event === TypeActionEnum.CREATE) {
        this.deliveryService.createDelivery(new DeliveryRequestModel(this.deliveryForm.value));
      } else if (event === TypeActionEnum.UPDATE) {
        this.deliveryService.updateDelivery(new DeliveryRequestModel(this.deliveryForm.value));
      } else {

      }
    }
  }

  public forkJoinCall() {
    this.subscriptions.add(
      forkJoin([this.findAllDeliveryman(), this.findAllRecipients()])
        .pipe(catchError((error) => of(error)))
        .subscribe((data: any) => {
          this.deliverymans = data[0]?.results || [];
          this.recipients = data[1]?.results || [];
          this.loading = false;
        })
    );
  }

  public buildForm() {
    this.deliveryForm = this.fb.group({
      id: [''],
      product: ['', Validators.required],
      deliveryman_id: ['', Validators.required],
      recipient_id: ['', Validators.required],
    });
  }

  public findAllDeliveryman() {
    return this.deliverymanService.findAllDeliveryman();
  }

  public findAllRecipients() {
    return this.recipientService.findAllRecipients();
  }

  public findDeliveryById(id: string) {
    if (id) {
      this.subscriptions.add(
        this.deliveryService.findByDeliveryId(id).subscribe(
          (res: DeliveryRequestModel) => {

            if (res) {
              this.deliveryForm.setValue(new DeliveryRequestModel(res));
              this.typeAction = TypeActionEnum.UPDATE;
            }
          },
          error => {

          })
      );
    }
  }
}
