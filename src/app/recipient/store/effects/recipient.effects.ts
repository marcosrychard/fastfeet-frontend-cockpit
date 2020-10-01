import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

import { RecipientService } from "src/app/recipient/services/recipient.service";
import * as Action from "../actions/recipient.actions";

@Injectable()
export class RecipientEffects {
  constructor(
    private recipientService: RecipientService,
    private actions: Actions,
    private router: Router,
  ) { }

  findAllRecipient = createEffect(() =>
    this.actions.pipe(
      ofType(Action.FIND_ALL_REQUEST),
      switchMap((action) =>
        this.recipientService
          .findAllRecipients(action.payload)
          .pipe(map((payload) => Action.FIND_ALL_SUCCESS({ payload })))
      )
    )
  );

  findByRecipientId = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.FIND_BY_ID_REQUEST),
        switchMap((action) =>
          this.recipientService.findByRecipientId(action.payload).pipe(
            map((payload) => Action.FIND_BY_ID_SUCCESS({ payload })),
            catchError((error) => of(Action.FIND_BY_ID_FAILURE({ error })))
          )
        )
      ),
  );

  createRecipient = createEffect(() =>
    this.actions.pipe(
      ofType(Action.CREATE_REQUEST),
      switchMap((action) =>
        this.recipientService.createRecipient(action.payload).pipe(
          tap(() => this.router.navigate(["/cockpit/recipient/list"])),
          map((payload) => Action.CREATE_SUCCESS({ payload })),
          catchError((error) => of(Action.CREATE_FAILURE({ error })))
        )
      )
    )
  );

  updateRecipient = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.UPDATE_REQUEST),
        switchMap((action) =>
          this.recipientService.updateRecipient(action.payload).pipe(
            tap(() => this.router.navigate(["/cockpit/recipient/list"])),
            map((payload) => Action.UPDATE_SUCCESS({ payload })),
            catchError((error) => of(Action.UPDATE_FAILURE({ error })))
          )
        )
      ),
    { dispatch: false }
  );
}
