export interface IState {
  list: any[];
  loading: boolean;
  error?: any;
}

export const INITIAL_DELIVERY_PROBLEM_STATE: IState = {
  list: [],
  loading: false,
};

export const FEATURE_NAME = "delivery_problem";
