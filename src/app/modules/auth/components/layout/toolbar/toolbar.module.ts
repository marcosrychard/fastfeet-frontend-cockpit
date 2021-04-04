import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { DefaultModule } from 'src/app/core/modules/default.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [DefaultModule],
  exports: [ToolbarComponent, DefaultModule],
})
export class ToolbarModule {}