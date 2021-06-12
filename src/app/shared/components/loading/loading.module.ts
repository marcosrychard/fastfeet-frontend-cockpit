import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { LoadingService } from '../../services/loading/loading.service';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [MaterialModule],
  exports: [LoadingComponent],
  providers: [LoadingService],
})
export class LoadingModule {}
