import { createReducer, on, Action } from "@ngrx/store";
import { INITIAL_RECIPIENT_STATE, IState } from "../states/recipient.state";
import * as RecipientAction from "../actions/recipient.actions";

const recipientReducer = createReducer(
  INITIAL_RECIPIENT_STATE,

  // FIND_ALL
  on(RecipientAction.FIND_ALL_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(RecipientAction.FIND_ALL_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: [...state.payload, ...payload],
  })),
  on(RecipientAction.FIND_ALL_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // FIND_BY_ID
  on(RecipientAction.FIND_BY_ID_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(RecipientAction.FIND_BY_ID_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: { ...payload },
  })),
  on(RecipientAction.FIND_BY_ID_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // CREATE
  on(RecipientAction.CREATE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),
  on(RecipientAction.CREATE_SUCCESS, (state) => ({
    ...state,
    loading: false,
  })),
  on(RecipientAction.CREATE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // UPDATE
  on(RecipientAction.UPDATE_REQUEST, (state) => ({
    ...state,
    loading: true,
  })),
  on(RecipientAction.UPDATE_SUCCESS, (state) => ({
    ...state,
    loading: false,
  })),
  on(RecipientAction.UPDATE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: IState, action: Action) {
  return recipientReducer(state, action)
}
