import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { of } from "rxjs";

import { DeliveryService } from "src/app/delivery/services/delivery.service";
import * as Action from "../actions/delivery.actions";

@Injectable()
export class DeliveryEffects {
  constructor(
    private deliveryService: DeliveryService,
    private actions: Actions,
    private router: Router
  ) {}

  findAllDeliveries = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.FIND_ALL_REQUEST),
        switchMap((action) =>
          this.deliveryService.findAllDeliveries(action.payload).pipe(
            map((payload) => Action.FIND_ALL_SUCCESS({ payload })),
            catchError((error) => of(Action.FIND_ALL_FAILURE({ error })))
          )
        )
      ),
  );

  findByIdDelivey = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.FIND_BY_ID_REQUEST),
        switchMap((action) =>
          this.deliveryService.findByDeliveryId(action.payload).pipe(
            map((payload) => Action.FIND_BY_ID_SUCCESS({ payload })),
            catchError((error) => of(Action.FIND_BY_ID_FAILURE({ error })))
          )
        )
      ),
  );

  createDelivery = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.CREATE_REQUEST),
        switchMap((action) =>
          this.deliveryService.createDelivery(action.payload).pipe(
            tap(() => this.router.navigate(["/cockpit/delivery/list"])),
            map((payload) => Action.CREATE_SUCCESS({ payload })),
            catchError((error) => of(Action.CREATE_FAILURE({ error })))
          )
        )
      ),
    { dispatch: false }
  );

  updateDelivery = createEffect(
    () =>
      this.actions.pipe(
        ofType(Action.UPDATE_REQUEST),
        switchMap((action) =>
          this.deliveryService.updateDelivery(action.payload).pipe(
            tap(() => this.router.navigate(["/cockpit/delivery/list"])),
            map((payload) => Action.UPDATE_SUCCESS({ payload })),
            catchError((error) => of(Action.UPDATE_FAILURE({ error })))
          )
        )
      ),
    { dispatch: false }
  );
}
