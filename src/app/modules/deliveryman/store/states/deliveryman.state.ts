export interface IState {
  payload: any;
  loading: boolean;
  error?: any;
}

export const INITIAL_DELIVERYMAN_STATE: IState = {
  payload: null,
  loading: false,
};

export const FEATURE_NAME = 'deliveryman';
