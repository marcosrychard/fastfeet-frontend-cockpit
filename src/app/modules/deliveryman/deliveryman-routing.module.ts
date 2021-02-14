import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliverymanListComponent } from 'src/app/modules/deliveryman/components/deliveryman-list/deliveryman-list.component';
import { DeliverymanFormComponent } from 'src/app/modules/deliveryman/components/deliveryman-form/deliveryman-form.component';
import { DeliverymanResolve } from 'src/app/shared/resolves/deliveryman/deliveryman.resolve';
import { deliverymanClaimsHash } from '../../core/claims-hash/deliveryman-claims.hash';

const DeliverymanRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DeliverymanListComponent,
    resolve: {
      deliverymans: DeliverymanResolve,
    },
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
export class DeliverymanRoutingModule { }
