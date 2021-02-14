import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CockpitComponent } from './cockpit.component';
import { HomeComponent } from '../../core/layout/home/home.component';
import { CockpitGuard } from '../../shared/guards/cockpit/cockpit.guard';

const CockpitRoutes: Routes = [
  {
    path: '',
    component: CockpitComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'delivery',
        loadChildren: () => import('../delivery/delivery.module').then((m) => m.DeliveryModule),
        canLoad: [CockpitGuard], canActivate: [CockpitGuard]
      },
      {
        path: 'deliveryman',
        loadChildren: () => import('../deliveryman/deliveryman.module').then((m) => m.DeliverymanModule),
        canLoad: [CockpitGuard], canActivate: [CockpitGuard]
      },
      {
        path: 'recipient',
        loadChildren: () => import('../recipient/recipient.module').then((m) => m.RecipientModule),
        canLoad: [CockpitGuard], canActivate: [CockpitGuard]
      },
      {
        path: 'delivery-problem',
        loadChildren: () => import('../delivery-problem/delivery-problem.module').then((m) => m.DeliveryProblemModule),
        canLoad: [CockpitGuard], canActivate: [CockpitGuard]
      },
    ],
  },
  { path: '**', redirectTo: 'cockpit' },
];

@NgModule({
  imports: [RouterModule.forChild(CockpitRoutes)],
  exports: [RouterModule],
})
export class CockpitRoutingModule { }
