import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipientFormComponent } from './components/recipient-form/recipient-form.component';
import { RecipientListComponent } from './components/recipient-list/recipient-list.component';
import { RecipientRoutingModule } from './recipient-routing.module';

@NgModule({
  imports: [RecipientRoutingModule, SharedModule, MaterialModule],
  declarations: [RecipientFormComponent, RecipientListComponent],
})
export class RecipientModule {}
