import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialSharedModule } from './material-shared.module';
import { RouterModule } from '@angular/router';
import { ClaimsDirective } from '../directives/claims/claims.directive';
import { PageHeaderListComponent } from '../components/page-header-list/page-header-list.component';
import { PageHeaderFormComponent } from '../components/page-header-form/page-header-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    PageHeaderListComponent,
    PageHeaderFormComponent,
    ClaimsDirective,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MaterialSharedModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MaterialSharedModule,
    PageHeaderListComponent,
    PageHeaderFormComponent,
    ClaimsDirective,
    TranslateModule,
    CommonModule,
  ],
})
export class DefaultModule {}
