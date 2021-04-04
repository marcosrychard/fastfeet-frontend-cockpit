import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from 'src/app/modules/delivery/components/delivery-form/delivery-form.component';
import { DeliveryListComponent } from 'src/app/modules/delivery/components/delivery-list/delivery-list.component';

const DeliveryRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DeliveryListComponent,
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
export class DeliveryRoutingModule {}
