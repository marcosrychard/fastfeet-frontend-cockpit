import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { DefaultModule } from '../../core/modules/default.module';
import { SigninStoreModule } from './store/auth-store.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [DefaultModule, AuthRoutingModule, SigninStoreModule],
})
export class AuthModule { }
