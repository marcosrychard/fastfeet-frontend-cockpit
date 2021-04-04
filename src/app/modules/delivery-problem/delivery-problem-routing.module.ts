import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryProblemListComponent } from 'src/app/modules/delivery-problem/components/delivery-problem-list/delivery-problem-list.component';

const DeliveryProblemRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: DeliveryProblemListComponent,

    data: {
      roles: [],
      claims: [],
    },
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(DeliveryProblemRoutes)],
  exports: [RouterModule],
})
export class DeliveryProblemRoutingModule {}
