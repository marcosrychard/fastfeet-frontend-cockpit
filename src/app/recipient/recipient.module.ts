import { NgModule } from "@angular/core";
import { DefaultModule } from "src/app/shared/modules/default.module";
import { RecipientFormComponent } from "src/app/recipient/components/recipient-form/recipient-form.component";
import { RecipientListComponent } from "src/app/recipient/components/recipient-list/recipient-list.component";
import { RecipientRoutingModule } from "./recipient-routing.module";
import { RecipientStoreModule } from "./store/recipient-store.module";
import { RecipientModalComponent } from './components/recipient-modal/recipient-modal.component';

@NgModule({
  imports: [
    DefaultModule,
    RecipientRoutingModule,
    RecipientStoreModule
  ],
  declarations: [
    RecipientFormComponent,
    RecipientListComponent,
    RecipientModalComponent,
  ]
})
export class RecipientModule { }
