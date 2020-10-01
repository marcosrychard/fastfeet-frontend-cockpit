import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { DeliverymanFacade } from "../../store/deliveryman.facade";
import { TypeActionEnum } from 'src/app/shared/enums/type-action.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-deliveryman-form",
  templateUrl: "./deliveryman-form.component.html",
  styleUrls: ["./deliveryman-form.component.scss"],
})
export class DeliverymanFormComponent implements OnInit {
  public loading = true;
  public deliverymanForm: FormGroup;
  public type_action = TypeActionEnum.CREATE;

  private id = this.route.snapshot.params["id"];
  private subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private deliverymanFacade: DeliverymanFacade
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.distachLoadById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private buildForm() {
    this.deliverymanForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  public onSubmit(event: string) {
    if (this.deliverymanForm.valid) {
      if (event === TypeActionEnum.CREATE) {
        this.create(this.deliverymanForm.value);
      } else if (event === TypeActionEnum.UPDATE) {
        this.update(this.deliverymanForm.value);
      }
    }
  }

  private preparetObjToGet(data: any) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
    };
  }

  public update(data: any) {
    this.deliverymanFacade.update(data);
  }

  public create(data: any) {
    this.deliverymanFacade.create(this.preparetObjTosave(data));
  }

  private distachLoadById(id: number) {
    if (id) {
      this.deliverymanFacade.loadById(id);
      this.findDeliveryById();
    }
  }

  private preparetObjTosave(data: any) {
    return {
      name: data.name,
      email: data.email
    };
  }


  private findDeliveryById() {
    this.subscriptions.add(
      this.deliverymanFacade.datas.subscribe((res) => {
        if (res) {
          this.setValueForm(res)
        }
      })
    );
  }

  private setValueForm(res: any) {
    this.deliverymanForm.setValue(this.preparetObjToGet(res));
    this.type_action = TypeActionEnum.UPDATE;
  }
}
