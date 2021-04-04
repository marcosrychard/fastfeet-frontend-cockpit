import { NgModule } from '@angular/core';
import { DeliveryFormComponent } from 'src/app/modules/delivery/components/delivery-form/delivery-form.component';
import { DeliveryListComponent } from 'src/app/modules/delivery/components/delivery-list/delivery-list.component';
import { DefaultModule } from 'src/app/core/modules/default.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';

@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryListComponent,
    DeliveryFormComponent,
  ],
  imports: [DefaultModule, DeliveryRoutingModule],
  exports: [DeliveryComponent, DefaultModule],
})
export class DeliveryModule {}
