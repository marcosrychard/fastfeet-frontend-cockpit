import { NgModule } from '@angular/core';
import { DefaultModule } from 'src/app/core/modules/default.module';
import { DeliverymanFormComponent } from 'src/app/modules/deliveryman/components/deliveryman-form/deliveryman-form.component';
import { DeliverymanListComponent } from 'src/app/modules/deliveryman/components/deliveryman-list/deliveryman-list.component';
import { DeliverymanRoutingModule } from './deliveryman-routing.module';

@NgModule({
  imports: [DefaultModule, DeliverymanRoutingModule],
  declarations: [DeliverymanListComponent, DeliverymanFormComponent],
})
export class DeliverymanModule {}
