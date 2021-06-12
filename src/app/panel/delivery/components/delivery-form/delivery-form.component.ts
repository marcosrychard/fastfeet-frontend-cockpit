import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { DeliveryRequestModel } from 'src/app/shared/models/request/delivery-request.model';
import { DeliveryManPaginatorResponseModel } from 'src/app/shared/models/response/deliveryman-paginator-response.model';
import { RecipientPaginatorResponseModel } from 'src/app/shared/models/response/recipient-response.model';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit, OnDestroy {
  public loading = true;
  public loadingDelivery = false;
  public deliveryForm: FormGroup;
  public typeAction = TypeActionEnum.CREATE;
  public recipientResponseModel: RecipientPaginatorResponseModel;
  public deliveryManResponseModel: DeliveryManPaginatorResponseModel;

  public id: string;
  public subscriptions = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private deliveryService: DeliveryService,
    private recipientService: RecipientService,
    private deliverymanService: DeliverymanService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.buildForm();
    this.forkJoinCall();
    this.findDeliveryById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(event: string) {
    if (this.deliveryForm.valid) {
      const data = new DeliveryRequestModel(this.deliveryForm.value);

      if (event === TypeActionEnum.UPDATE) {
        this.updateDelivery(data);
      } else {
        this.createDelivery(data);
      }

      this.goList();
    }
  }

  goList() {
    this.router.navigate(['/panel/delivery/list']);
  }

  createDelivery(data: DeliveryRequestModel) {
    this.deliveryService.createDelivery(data).subscribe(() => console.log);
  }

  updateDelivery(data: DeliveryRequestModel) {
    this.deliveryService.updateDelivery(data).subscribe(() => console.log);
  }

  forkJoinCall() {
    this.subscriptions.add(
      forkJoin([
        this.deliverymanService.findAllDeliveryman(),
        this.recipientService.findAllRecipients(),
      ]).subscribe(
        ([deliveryman, recipient]) => {
          this.deliveryManResponseModel = new DeliveryManPaginatorResponseModel(
            deliveryman
          );
          this.recipientResponseModel = new RecipientPaginatorResponseModel(
            recipient
          );
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        }
      )
    );
  }

  buildForm() {
    this.deliveryForm = this.fb.group({
      id: [''],
      product: ['', Validators.required],
      deliveryman_id: ['', Validators.required],
      recipient_id: ['', Validators.required],
    });
  }

  findDeliveryById(id: string) {
    if (id) {
      this.loadingDelivery = true;
      this.subscriptions.add(
        this.deliveryService.findByDeliveryId(id).subscribe(
          (res: DeliveryRequestModel) => {
            if (res) {
              this.deliveryForm.setValue(new DeliveryRequestModel(res));
              this.typeAction = TypeActionEnum.UPDATE;
            }
            this.loadingDelivery = false;
          },
          (error) => {
            this.loadingDelivery = false;
          }
        )
      );
    }
  }
}
