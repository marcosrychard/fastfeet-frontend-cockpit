import * as ActionTypes from "../action-types/auth.action-types";
import { createAction, props } from "@ngrx/store";

export const SIGNIN_REQUEST = createAction(
  ActionTypes.SIGNIN_REQUEST,
  props<{ payload: any }>()
);

export const SIGNIN_SUCCESS = createAction(
  ActionTypes.SIGNIN_SUCCESS,
  props<{ payload: any }>()
);

export const SIGNIN_FAILURE = createAction(
  ActionTypes.SIGNIN_FAILURE,
  props<{ error: any }>()
);
