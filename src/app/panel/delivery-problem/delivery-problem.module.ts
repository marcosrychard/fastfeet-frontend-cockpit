import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryProblemListComponent } from './components/delivery-problem-list/delivery-problem-list.component';
import { DeliveryProblemModalCancelComponent } from './components/delivery-problem-modal-cancel/delivery-problem-modal-cancel.component';
import { DeliveryProblemModalViewComponent } from './components/delivery-problem-modal-view/delivery-problem-modal-view.component';
import { DeliveryProblemRoutingModule } from './delivery-problem-routing.module';

@NgModule({
  imports: [DeliveryProblemRoutingModule, SharedModule, MaterialModule],
  declarations: [
    DeliveryProblemListComponent,
    DeliveryProblemModalCancelComponent,
    DeliveryProblemModalViewComponent,
  ],
})
export class DeliveryProblemModule {}
