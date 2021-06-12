import { Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from './components/loading/loading.module';
import { PageHeaderFormComponent } from './components/page-header-form/page-header-form.component';
import { PageHeaderListComponent } from './components/page-header-list/page-header-list.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [PageHeaderFormComponent, PageHeaderListComponent],
  imports: [
    MaterialModule,
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
    LoadingModule,
    PageHeaderFormComponent,
    PageHeaderListComponent,
  ],
  providers: [Overlay],
})
export class SharedModule {}
