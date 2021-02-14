import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState, FEATURE_NAME } from '../states/auth.states';

const AUTH_STATE = createFeatureSelector<IState>(FEATURE_NAME);

export const AUTH_IS_LOADING = createSelector(AUTH_STATE, state => state.loading);

export const FIND_AUTH = createSelector(AUTH_STATE, state => state.payload);

export const FIND_AUTH_ERROR = createSelector(AUTH_STATE, state => state.error);
