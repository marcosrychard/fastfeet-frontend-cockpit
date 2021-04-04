import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { DeliverymanRequestModel } from 'src/app/shared/models/request/deliveryman-request.model';
import { DeliveryManViewModel } from 'src/app/shared/models/view-models/deliveryman.view-model';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';

@Component({
  selector: 'app-deliveryman-form',
  templateUrl: './deliveryman-form.component.html',
  styleUrls: ['./deliveryman-form.component.scss'],
})
export class DeliverymanFormComponent implements OnInit, OnDestroy {
  public loading = true;
  public deliverymanForm: FormGroup;
  public typeAction = TypeActionEnum.CREATE;

  private id = this.route.snapshot.params.id;
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private deliverymanService: DeliverymanService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.findDeliverymanById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit(event: string) {
    if (this.deliverymanForm.valid) {
      const data = new DeliverymanRequestModel(this.deliverymanForm.value);

      if (event === TypeActionEnum.CREATE) {
        this.createDeliveryman(data);
      } else {
        this.updateDeliveryman(data);
      }

      this.goList();
    }
  }

  public goList() {
    this.router.navigate(['/cockpit/deliveryman/list']);
  }

  private createDeliveryman(data: DeliverymanRequestModel) {
    this.deliverymanService
      .createDeliveryman(data)
      .subscribe((res: DeliveryManViewModel) => {
        console.log('createDeliveryman', res);
      });
  }

  private updateDeliveryman(data: DeliverymanRequestModel) {
    this.deliverymanService
      .updateDeliveryman(data)
      .subscribe((res: DeliveryManViewModel) => {
        console.log('updateDeliveryman', res);
      });
  }

  private findDeliverymanById(id: string) {
    this.subscriptions.add(
      this.deliverymanService.findByDeliverymanId(id).subscribe(
        (res: DeliverymanRequestModel) => {
          if (res) {
            this.deliverymanForm.setValue(new DeliverymanRequestModel(res));
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

  private buildForm() {
    this.deliverymanForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
