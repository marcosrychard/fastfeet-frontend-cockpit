import { NgModule } from "@angular/core";
import { DefaultModule } from "src/app/shared/modules/default.module";
import { DeliveryProblemListComponent } from "src/app/delivery-problem/components/delivery-problem-list/delivery-problem-list.component";
import { DeliveryProblemRoutingModule } from "./delivery-problem-routing.module";
import { DeliveryProblemStoreModule } from "./store/delivery-problem-store.module";
import { DeliveryProblemModalCancelComponent } from './components/delivery-problem-modal-cancel/delivery-problem-modal-cancel.component';
import { DeliveryProblemModalViewComponent } from './components/delivery-problem-modal-view/delivery-problem-modal-view.component';

@NgModule({
  imports: [
    DefaultModule,
    DeliveryProblemRoutingModule,
    DeliveryProblemStoreModule,
  ],
  declarations: [
    DeliveryProblemListComponent,
    DeliveryProblemModalCancelComponent,
    DeliveryProblemModalViewComponent
  ],

})
export class DeliveryProblemModule { }
