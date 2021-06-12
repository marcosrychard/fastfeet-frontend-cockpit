import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryDataViewsModalComponent } from './components/delivery-data-views-modal/delivery-data-views-modal.component';
import { DeliveryFormComponent } from './components/delivery-form/delivery-form.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';

@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryListComponent,
    DeliveryFormComponent,
    DeliveryDataViewsModalComponent,
  ],
  imports: [DeliveryRoutingModule, SharedModule, MaterialModule],
})
export class DeliveryModule {}
