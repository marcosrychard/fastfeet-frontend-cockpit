import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { FEATURE_NAME } from "./states/delivery-problem.state";
import { reducer } from "./reducers/delivery-problem.reducers";
import { DeliveryProblemEffects } from './effects/delivery-problem.affects';

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, reducer),
    EffectsModule.forFeature([DeliveryProblemEffects]),
  ],
})
export class DeliveryProblemStoreModule {}
