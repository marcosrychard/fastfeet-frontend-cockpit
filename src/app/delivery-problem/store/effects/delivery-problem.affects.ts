import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as Action from "../actions/delivery-problem.actions";
import { DeliveryProblemService } from "../../services/delivery-problem.service";

@Injectable()
export class DeliveryProblemEffects {
  constructor(
    private deliveryProblem: DeliveryProblemService,
    private actions: Actions
  ) {}

  findAllDeliveryProblems = createEffect(() =>
    this.actions.pipe(
      ofType(Action.FIND_ALL_REQUEST),
      switchMap((action) =>
        this.deliveryProblem.findAllDeliveryProblems(action.payload).pipe(
          map((result) => Action.FIND_ALL_SUCCESS({ payload: result })),
          catchError((error) => of(Action.FIND_ALL_FAILURE({ error })))
        )
      )
    )
  );
}
