import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverymanFormComponent } from 'src/app/modules/deliveryman/components/deliveryman-form/deliveryman-form.component';
import { DeliverymanListComponent } from 'src/app/modules/deliveryman/components/deliveryman-list/deliveryman-list.component';
import { deliverymanClaimsHash } from '../../core/claims-hash/deliveryman-claims.hash';

const DeliverymanRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DeliverymanListComponent,
    data: {
      roles: [],
      claims: deliverymanClaimsHash,
    },
  },
  {
    path: 'form',
    component: DeliverymanFormComponent,
    data: {
      roles: [],
      claims: [],
    },
  },
  {
    path: 'form/:id',
    component: DeliverymanFormComponent,
    data: {
      roles: [],
      claims: [],
    },
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(DeliverymanRoutes)],
  exports: [RouterModule],
})
export class DeliverymanRoutingModule {}
