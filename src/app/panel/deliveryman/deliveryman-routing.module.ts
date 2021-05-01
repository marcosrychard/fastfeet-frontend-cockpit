import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { deliverymanClaimsHash } from '../../core/claims-hash/deliveryman-claims.hash';
import { DeliverymanFormComponent } from './components/deliveryman-form/deliveryman-form.component';
import { DeliverymanListComponent } from './components/deliveryman-list/deliveryman-list.component';


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
