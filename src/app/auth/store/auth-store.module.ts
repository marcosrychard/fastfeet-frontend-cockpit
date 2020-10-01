import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SigninEffects } from './effects/auth.effects';
import { reducer } from './reducers/auth.reducers';
import { FEATURE_NAME } from './states/auth.states';


@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, reducer),
    EffectsModule.forFeature([SigninEffects]),
  ],
})
export class SigninStoreModule { }
