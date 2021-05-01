import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CockpitGuard } from '../shared/guards/cockpit/cockpit.guard';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel.component';

const delivery = import('./delivery/delivery.module').then(
  (m) => m.DeliveryModule
);

const deliveryman = import('./deliveryman/deliveryman.module').then(
  (m) => m.DeliverymanModule
);

const home = import('./home/home.module').then((m) => m.HomeModule);

const recipient = import('./recipient/recipient.module').then(
  (m) => m.RecipientModule
);

const deliveryProblem = import(
  './delivery-problem/delivery-problem.module'
).then((m) => m.DeliveryProblemModule);

const PanelRoutes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        loadChildren: () => home,
      },
      {
        path: 'delivery',
        loadChildren: () => delivery,
        canLoad: [CockpitGuard],
        canActivate: [CockpitGuard],
      },
      {
        path: 'deliveryman',
        loadChildren: () => deliveryman,
        canLoad: [CockpitGuard],
        canActivate: [CockpitGuard],
      },
      {
        path: 'recipient',
        loadChildren: () => recipient,
        canLoad: [CockpitGuard],
        canActivate: [CockpitGuard],
      },
      {
        path: 'delivery-problem',
        loadChildren: () => deliveryProblem,
        canLoad: [CockpitGuard],
        canActivate: [CockpitGuard],
      },
    ],
  },
  { path: '**', redirectTo: 'panel' },
];

@NgModule({
  imports: [RouterModule.forChild(PanelRoutes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
