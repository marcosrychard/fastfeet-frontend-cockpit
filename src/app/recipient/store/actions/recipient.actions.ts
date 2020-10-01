import { createAction, props } from "@ngrx/store";
import * as ActionTypes from "../action-types/recipient.action-types";

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

export const FIND_BY_ID_REQUEST = createAction(
  ActionTypes.FIND_BY_ID_REQUEST,
  props<{ payload: number }>()
);

export const FIND_BY_ID_SUCCESS = createAction(
  ActionTypes.FIND_BY_ID_SUCCESS,
  props<{ payload: any }>()
);

export const FIND_BY_ID_FAILURE = createAction(
  ActionTypes.FIND_BY_ID_FAILURE,
  props<{ error: any }>()
);

export const CREATE_REQUEST = createAction(
  ActionTypes.CREATE_REQUEST,
  props<{ payload: any }>()
);

export const CREATE_SUCCESS = createAction(
  ActionTypes.CREATE_SUCCESS,
  props<{ payload: any }>()
);

export const CREATE_FAILURE = createAction(
  ActionTypes.CREATE_FAILURE,
  props<{ error: any }>()
);

export const UPDATE_REQUEST = createAction(
  ActionTypes.UPDATE_REQUEST,
  props<{ payload: any }>()
);

export const UPDATE_SUCCESS = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ payload: any }>()
);

export const UPDATE_FAILURE = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: any }>()
);
