import { createReducer, on, Action } from "@ngrx/store";
import { INITIAL_DELIVERY_STATE, IState } from "../states/delivery.state";
import * as DeliveryAction from "../actions/delivery.actions";

const deliveryReducer = createReducer(
  INITIAL_DELIVERY_STATE,
  on(DeliveryAction.FIND_ALL_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DeliveryAction.FIND_ALL_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: [...state.payload, ...payload],
  })),
  on(DeliveryAction.FIND_ALL_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // FIND_BY_ID
  on(DeliveryAction.FIND_BY_ID_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DeliveryAction.FIND_BY_ID_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: { ...payload },
  })),
  on(DeliveryAction.FIND_BY_ID_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // CREATE
  on(DeliveryAction.CREATE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),
  on(DeliveryAction.CREATE_SUCCESS, (state) => ({
    ...state,
    loading: false,
  })),
  on(DeliveryAction.CREATE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // UPDATE
  on(DeliveryAction.UPDATE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),
  on(DeliveryAction.UPDATE_SUCCESS, (state) => ({
    ...state,
    loading: false,
  })),
  on(DeliveryAction.UPDATE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: IState, action: Action) { return deliveryReducer(state, action) };
