import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { FEATURE_NAME } from "./states/delivery.state";
import { reducer } from "./reducers/delivery.reducers";
import { DeliveryEffects } from "./effects/delivery.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, reducer),
    EffectsModule.forFeature([DeliveryEffects]),
  ],
})
export class DeliveryStoreModule {}
