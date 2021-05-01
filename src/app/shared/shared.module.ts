import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderFormComponent } from './components/page-header-form/page-header-form.component';
import { PageHeaderListComponent } from './components/page-header-list/page-header-list.component';
import { MaterialSharedModule } from './material-shared.module';

@NgModule({
  declarations: [PageHeaderFormComponent, PageHeaderListComponent],
  imports: [
    MaterialSharedModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    TranslateModule,
    CommonModule,
    PageHeaderFormComponent,
    PageHeaderListComponent,
  ],
})
export class SharedModule {}
