import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription, forkJoin, of } from "rxjs";
import { RecipientService } from "src/app/recipient/services/recipient.service";
import { DeliverymanService } from "src/app/deliveryman/services/deliveryman.service";
import { catchError } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DeliveryFacade } from "../../store/delivery.facade";
import { TypeActionEnum } from "src/app/shared/enums/type-action.enum";

@Component({
  selector: "app-delivery-form",
  templateUrl: "./delivery-form.component.html",
  styleUrls: ["./delivery-form.component.scss"],
})
export class DeliveryFormComponent implements OnInit, OnDestroy {
  public deliverymans = [];
  public recipients = [];
  public loading = true;
  public deliveryForm: FormGroup;
  public type_action = TypeActionEnum.CREATE;
  private subscriptions = new Subscription();
  private id = this.route.snapshot.params["id"];

  constructor(
    private fb: FormBuilder,
    private recipientService: RecipientService,
    private deliverymanService: DeliverymanService,
    private deliveryFacade: DeliveryFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.forkJoinCall();
    this.distachLoadById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // public get f() {
  //   return this.deliveryForm.controls;
  // }

  private buildForm() {
    this.deliveryForm = this.fb.group({
      id: [""],
      product: ["", Validators.required],
      deliveryman_id: ["", Validators.required],
      recipient_id: ["", Validators.required],
    });
  }

  private findAllDeliveryman() {
    return this.deliverymanService.findAllDeliveryman();
  }

  private findAllRecipients() {
    return this.recipientService.findAllRecipients();
  }

  private distachLoadById(id: number) {
    if (id) {
      this.deliveryFacade.loadById(id);
      this.findDeliveryById();
    }
  }

  private findDeliveryById() {
    this.subscriptions.add(
      this.deliveryFacade.datas.subscribe((res) => {
        if (res) {
          this.deliveryForm.setValue(this.preparetObj(res));
          this.type_action = TypeActionEnum.UPDATE;
        }
      })
    );
  }

  public update(data: any) {
    this.deliveryFacade.update(data);
  }

  public create(data: any) {
    this.deliveryFacade.create(this.preparetObj(data));
  }

  public onSubmit(event: string) {
    if (this.deliveryForm.valid) {
      if (event === TypeActionEnum.CREATE) {
        this.create(this.deliveryForm.value);
      } else if (event === TypeActionEnum.UPDATE) {
        this.update(this.deliveryForm.value);
      }
    }
  }


  public preparetObj(data: any) {
    return {
      id: data.id || undefined,
      product: data.product,
      recipient_id: data.recipient_id,
      deliveryman_id: data.deliveryman_id,
    };
  }

  private forkJoinCall() {
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
}
