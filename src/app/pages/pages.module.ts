import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '../shared/material-shared.module';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigninComponent, Error500Component, Error404Component],
  imports: [PagesRoutingModule, SharedModule, MaterialSharedModule],
})
export class PagesModule {}
