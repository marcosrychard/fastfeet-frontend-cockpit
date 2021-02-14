import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryListComponent } from 'src/app/modules/delivery/components/delivery-list/delivery-list.component';
import { DeliveryFormComponent } from 'src/app/modules/delivery/components/delivery-form/delivery-form.component';
import { DeliveryResolve } from 'src/app/shared/resolves/delivery/delivery.resolve';

const DeliveryRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DeliveryListComponent,
    resolve: {
      deliveries: DeliveryResolve,
    },
    data: {
      roles: [],
      claims: [],
    },
  },
  {
    path: 'form',
    component: DeliveryFormComponent,
    data: {
      roles: [],
      claims: [],
    },
  },
  {
    path: 'form/:id',
    component: DeliveryFormComponent,
    data: {
      roles: [],
      claims: [],
    },
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(DeliveryRoutes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule { }
