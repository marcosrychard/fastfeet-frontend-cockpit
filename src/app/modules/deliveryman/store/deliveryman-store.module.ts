import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FEATURE_NAME } from './states/deliveryman.state';
import { reducer } from './reducers/deliveryman.reducers';
import { DeliverymanEffects } from './effects/deliveryman.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, reducer),
    EffectsModule.forFeature([DeliverymanEffects]),
  ],
})
export class DeliverymanStoreModule {}
