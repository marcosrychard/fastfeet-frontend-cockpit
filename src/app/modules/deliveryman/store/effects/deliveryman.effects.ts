import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { of } from "rxjs";

import * as Action from "../actions/deliveryman.actions";
import { DeliverymanService } from "../../../../shared/services/deliveryman/deliveryman.service";

@Injectable()
export class DeliverymanEffects {
  constructor(
    private deliverymanService: DeliverymanService,
    private actions: Actions,
    private router: Router
  ) { }

  findAllDeliveryman = createEffect(() =>
    this.actions.pipe(
      ofType(Action.FIND_ALL_REQUEST),
      switchMap((action) =>
        this.deliverymanService.findAllDeliveryman(action.payload).pipe(
          map((result) => Action.FIND_ALL_SUCCESS({ payload: result })),
          catchError((error) => of(Action.FIND_ALL_FAILURE({ error })))
        )
      )
    )
  );

  findByDeliverymanId = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.FIND_BY_ID_REQUEST),
        switchMap((action) =>
          this.deliverymanService.findByDeliverymanId(action.payload).pipe(
            map((payload) => Action.FIND_BY_ID_SUCCESS({ payload })),
            catchError((error) => of(Action.FIND_BY_ID_FAILURE({ error })))
          )
        )
      ),
  );

  createDeliveryman = createEffect(() =>
    this.actions.pipe(
      ofType(Action.CREATE_REQUEST),
      switchMap((action) =>
        this.deliverymanService.createDeliveryman(action.payload).pipe(
          tap(() => this.router.navigate(["/cockpit/deliveryman/list"])),
          map((recipient) => Action.CREATE_SUCCESS({ payload: recipient })),
          catchError((error) => of(Action.CREATE_FAILURE({ error })))
        )
      )
    )
  );

  updateDeliveryman = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.UPDATE_REQUEST),
        switchMap((action) =>
          this.deliverymanService.updateDeliveryman(action.payload).pipe(
            tap(() => this.router.navigate(["/cockpit/deliveryman/list"])),
            map((payload) => Action.UPDATE_SUCCESS({ payload })),
            catchError((error) => of(Action.UPDATE_FAILURE({ error })))
          )
        )
      ),
    { dispatch: false }
  );
}
