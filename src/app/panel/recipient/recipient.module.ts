import { NgModule } from '@angular/core';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipientFormComponent } from './components/recipient-form/recipient-form.component';
import { RecipientListComponent } from './components/recipient-list/recipient-list.component';
import { RecipientRoutingModule } from './recipient-routing.module';

@NgModule({
  imports: [RecipientRoutingModule, SharedModule, MaterialSharedModule],
  declarations: [RecipientFormComponent, RecipientListComponent],
})
export class RecipientModule {}
