import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipientFacade } from "../../store/recipient.facade";
import { TypeActionEnum } from 'src/app/shared/enums/type-action.enum';

@Component({
  selector: "app-recipient-form",
  templateUrl: "./recipient-form.component.html",
  styleUrls: ["./recipient-form.component.scss"],
})
export class RecipientFormComponent implements OnInit {
  public loading = true;
  public recipientForm: FormGroup;
  public type_action = TypeActionEnum.CREATE;

  private id = this.route.snapshot.params["id"];
  private subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private recipientFacade: RecipientFacade
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.distachLoadById(this.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private buildForm() {
    this.recipientForm = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      street: ["", Validators.required],
      number: ["", Validators.required],
      complement: ["", Validators.required],
      zipcode: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
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
    this.recipientFacade.update(data);
  }

  public create(data: any) {
    this.recipientFacade.create(this.preparetObjTosave(data));
  }

  private distachLoadById(id: number) {
    if (id) {
      this.recipientFacade.loadById(id);
      this.findDeliveryById();
    }
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

  private findDeliveryById() {
    this.subscriptions.add(
      this.recipientFacade.datas.subscribe((res) => {
        if (res) {
          this.setValueForm(res)
        }
      })
    );
  }

  private setValueForm(res: any) {
    this.recipientForm.setValue(this.preparetObjToGet(res));
    this.type_action = TypeActionEnum.UPDATE;
  }
}
