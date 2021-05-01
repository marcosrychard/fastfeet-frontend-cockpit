import { NgModule } from '@angular/core';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliverymanFormComponent } from './components/deliveryman-form/deliveryman-form.component';
import { DeliverymanListComponent } from './components/deliveryman-list/deliveryman-list.component';
import { DeliverymanRoutingModule } from './deliveryman-routing.module';

@NgModule({
  imports: [DeliverymanRoutingModule, SharedModule, MaterialSharedModule],
  declarations: [DeliverymanListComponent, DeliverymanFormComponent],
})
export class DeliverymanModule {}
