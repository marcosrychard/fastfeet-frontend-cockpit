import * as ActionTypes from "../action-types/delivery-problem.action-types";
import { createAction, props } from "@ngrx/store";

export const FIND_ALL_REQUEST = createAction(
  ActionTypes.FIND_ALL_REQUEST,
  props<{ payload: any }>()
);

export const FIND_ALL_SUCCESS = createAction(
  ActionTypes.FIND_ALL_SUCCESS,
  props<{ payload: any }>()
);

export const FIND_ALL_FAILURE = createAction(
  ActionTypes.FIND_ALL_FAILURE,
  props<{ error: any }>()
);
