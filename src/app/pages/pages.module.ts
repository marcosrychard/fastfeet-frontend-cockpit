import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigninComponent, Error500Component, Error404Component],
  imports: [PagesRoutingModule, SharedModule, MaterialModule],
})
export class PagesModule {}
