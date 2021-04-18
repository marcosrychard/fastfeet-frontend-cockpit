import { NgModule } from '@angular/core';
import { DefaultModule } from 'src/app/core/modules/default.module';
import { DeliveryFormComponent } from 'src/app/modules/delivery/components/delivery-form/delivery-form.component';
import { DeliveryListComponent } from 'src/app/modules/delivery/components/delivery-list/delivery-list.component';
import { DeliveryDataViewsModalComponent } from './components/delivery-data-views-modal/delivery-data-views-modal.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';

@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryListComponent,
    DeliveryFormComponent,
    DeliveryDataViewsModalComponent,
  ],
  imports: [DefaultModule, DeliveryRoutingModule],
  exports: [DeliveryComponent, DefaultModule, DeliveryDataViewsModalComponent],
})
export class DeliveryModule {}
