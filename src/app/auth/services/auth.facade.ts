import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as AuthSelectors from "../store/selectors/auth.selectors";
import * as AuthActions from "../store/actions/auth.actions";
import { IState } from "../store/states/auth.states";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root",
})
export class AuthFacade {
  loading = this.store.pipe(select(AuthSelectors.AUTH_IS_LOADING));
  datas = this.store.pipe(select(AuthSelectors.FIND_AUTH));
  errors = this.store.pipe(select(AuthSelectors.FIND_AUTH_ERROR))

  constructor(
    private store: Store<IState>,
    private authService: AuthService
  ) { }

  public signin(payload = {}) {
    this.store.dispatch(AuthActions.SIGNIN_REQUEST({ payload }));
  }

  public logout() {
    this.authService.logout()
  }

  public getDataUserStorage() {
    return this.authService.getDataUserStorage()
  }
}
