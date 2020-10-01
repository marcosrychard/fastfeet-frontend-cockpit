import { createReducer, on, Action } from "@ngrx/store";
import { INITIAL_DELIVERY_PROBLEM_STATE, IState } from "../states/delivery-problem.state";
import * as DeliveryProblemAction from "../actions/delivery-problem.actions";

const deliveryReducer = createReducer(
  INITIAL_DELIVERY_PROBLEM_STATE,
  on(DeliveryProblemAction.FIND_ALL_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DeliveryProblemAction.FIND_ALL_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    list: [...state.list, ...payload],
  })),
  on(DeliveryProblemAction.FIND_ALL_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: IState, action: Action) {
  return deliveryReducer(state, action)
}
