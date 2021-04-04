import { NgModule } from '@angular/core';
import { RecipientFormComponent } from 'src/app/modules/recipient/components/recipient-form/recipient-form.component';
import { RecipientListComponent } from 'src/app/modules/recipient/components/recipient-list/recipient-list.component';
import { DefaultModule } from 'src/app/core/modules/default.module';
import { RecipientRoutingModule } from './recipient-routing.module';
@NgModule({
  imports: [
    DefaultModule,
    RecipientRoutingModule,
  ],
  declarations: [
    RecipientFormComponent,
    RecipientListComponent,

  ]
})
export class RecipientModule { }
