import { NgModule } from "@angular/core";
import { DefaultModule } from "src/app/shared/modules/default.module";
import { DeliverymanListComponent } from "src/app/deliveryman/components/deliveryman-list/deliveryman-list.component";
import { DeliverymanFormComponent } from "src/app/deliveryman/components/deliveryman-form/deliveryman-form.component";
import { DeliverymanRoutingModule } from "./deliveryman-routing.module";
import { DeliverymanStoreModule } from "./store/deliveryman-store.module";
import { DeliverymanModalComponent } from './components/deliveryman-modal/deliveryman-modal.component';

@NgModule({
  imports: [
    DefaultModule,
    DeliverymanRoutingModule,
    DeliverymanStoreModule
  ],
  declarations: [
    DeliverymanListComponent,
    DeliverymanFormComponent,
    DeliverymanModalComponent
  ],
})
export class DeliverymanModule { }
