import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { SigninComponent } from './signin/signin.component';

const AuthRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    component: SigninComponent,
  },
  { path: 'not-found', component: Error404Component },
  { path: '500', component: Error500Component, data: { title: 'Error' } },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
