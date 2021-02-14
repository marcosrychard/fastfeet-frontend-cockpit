import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as Action from '../actions/auth.actions'
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SigninEffects {

  constructor(
    private authService: AuthService,
    private actions: Actions,
  ) { }

  signin = createEffect(() =>
    this.actions.pipe(
      ofType(Action.SIGNIN_REQUEST),
      switchMap((action) =>
        this.authService.signin(action.payload).pipe(
          map((payload) => Action.SIGNIN_SUCCESS({ payload })),
          catchError((error) => of(Action.SIGNIN_FAILURE({ error })))
        )
      )
    )
  );
}
