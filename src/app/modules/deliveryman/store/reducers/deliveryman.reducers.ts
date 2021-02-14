import { createReducer, on, Action } from "@ngrx/store";
import { INITIAL_DELIVERYMAN_STATE, IState } from "../states/deliveryman.state";
import * as DeliverymanAction from "../actions/deliveryman.actions";

const deliverymanReducer = createReducer(
  INITIAL_DELIVERYMAN_STATE,

  // FIND_ALL
  on(DeliverymanAction.FIND_ALL_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DeliverymanAction.FIND_ALL_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: [...state.payload, ...payload],
  })),
  on(DeliverymanAction.FIND_ALL_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // FIND_BY_ID
  on(DeliverymanAction.FIND_BY_ID_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DeliverymanAction.FIND_BY_ID_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: { ...payload },
  })),
  on(DeliverymanAction.FIND_BY_ID_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // CREATE
  on(DeliverymanAction.CREATE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),
  on(DeliverymanAction.CREATE_SUCCESS, (state) => ({
    ...state,
    loading: false,
  })),
  on(DeliverymanAction.CREATE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // UPDATE
  on(DeliverymanAction.UPDATE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),
  on(DeliverymanAction.UPDATE_SUCCESS, (state) => ({
    ...state,
    loading: false,
  })),
  on(DeliverymanAction.UPDATE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: IState, action: Action) {
  return deliverymanReducer(state, action)
}

