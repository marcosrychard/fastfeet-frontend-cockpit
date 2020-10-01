import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState, FEATURE_NAME } from '../states/recipient.state'

const FIND_STATE = createFeatureSelector<IState>(FEATURE_NAME);

export const  FIND_IS_LOADING = createSelector(FIND_STATE, state => state.loading);

export const FIND_RECIPIENTS = createSelector(FIND_STATE, state => state.payload);
