import { NgModule } from "@angular/core";
import { DeliveryComponent } from "./delivery.component";
import { DefaultModule } from "src/app/shared/modules/default.module";
import { DeliveryListComponent } from "src/app/delivery/components/delivery-list/delivery-list.component";
import { DeliveryFormComponent } from "src/app/delivery/components/delivery-form/delivery-form.component";
import { DeliveryRoutingModule } from "./delivery-routing.module";
import { DeliveryStoreModule } from './store/delivery-store.module';
import { DeliveryModalComponent } from './components/delivery-modal/delivery-modal.component';

@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryListComponent,
    DeliveryFormComponent,
    DeliveryModalComponent,
  ],
  imports: [DefaultModule, DeliveryRoutingModule, DeliveryStoreModule],
  exports: [DeliveryComponent, DefaultModule],
})
export class DeliveryModule {}
