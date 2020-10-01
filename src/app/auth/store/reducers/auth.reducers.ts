import { createReducer, on, Action } from "@ngrx/store";
import { INITIAL_AUTH_STATE, IState } from "../states/auth.states";
import * as SigninAction from "../actions/auth.actions";

const signinReducer = createReducer(
  INITIAL_AUTH_STATE,
  on(SigninAction.SIGNIN_REQUEST, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(SigninAction.SIGNIN_SUCCESS, (state, { payload }) => ({
    ...state,
    loading: false,
    payload: { ...payload },
  })),
  on(SigninAction.SIGNIN_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error: { ...error.error },
  }))
);

export function reducer(state: IState, action: Action) {
  return signinReducer(state, action)
}
