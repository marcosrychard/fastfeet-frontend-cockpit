export interface IState {
  payload: any;
  loading: boolean;
  error?: any;
}

export const INITIAL_DELIVERY_STATE: IState = {
  payload: null,
  loading: false,
};

export const FEATURE_NAME = "delivery";
