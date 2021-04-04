import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipientFormComponent } from 'src/app/modules/recipient/components/recipient-form/recipient-form.component';
import { RecipientListComponent } from 'src/app/modules/recipient/components/recipient-list/recipient-list.component';

const RecipientRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: RecipientListComponent,

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
export class RecipientRoutingModule {}
