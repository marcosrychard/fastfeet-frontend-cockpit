import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliverymanFormComponent } from './components/deliveryman-form/deliveryman-form.component';
import { DeliverymanListComponent } from './components/deliveryman-list/deliveryman-list.component';
import { DeliverymanRoutingModule } from './deliveryman-routing.module';

@NgModule({
  imports: [DeliverymanRoutingModule, SharedModule, MaterialModule],
  declarations: [DeliverymanListComponent, DeliverymanFormComponent],
})
export class DeliverymanModule {}
