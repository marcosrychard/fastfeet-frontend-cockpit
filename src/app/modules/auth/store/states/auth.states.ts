export interface IState {
  payload: any;
  loading: boolean;
  error?: any;
}

export const INITIAL_AUTH_STATE: IState = {
  payload: null,
  loading: false,
  error: null
};

export const FEATURE_NAME = 'auth';
