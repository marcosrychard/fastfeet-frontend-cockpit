import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { FEATURE_NAME } from "./states/recipient.state";
import { reducer } from "./reducers/recipient.reducers";
import { RecipientEffects } from "./effects/recipient.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, reducer),
    EffectsModule.forFeature([RecipientEffects]),
  ],
})
export class RecipientStoreModule {}
