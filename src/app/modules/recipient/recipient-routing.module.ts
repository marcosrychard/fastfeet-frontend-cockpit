import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipientListComponent } from 'src/app/modules/recipient/components/recipient-list/recipient-list.component';
import { RecipientFormComponent } from 'src/app/modules/recipient/components/recipient-form/recipient-form.component';
import { RecipientResolve } from 'src/app/shared/resolves/recipient/recipient.resolve';

const RecipientRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: RecipientListComponent,
    resolve: {
      recipients: RecipientResolve,
    },
    data: {
      roles: [],
      claims: [],
    },
  },
  {
    path: 'form',
    component: RecipientFormComponent,
    data: {
      roles: [],
      claims: [],
    },
  },
  {
    path: 'form/:id',
    component: RecipientFormComponent,
    data: {
      roles: [],
      claims: [],
    },
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(RecipientRoutes)],
  exports: [RouterModule],
})
export class RecipientRoutingModule { }
