import { Action } from "redux";

export interface StateType {
  muffins: MuffinType[];
  isLoading: boolean;
  errorMsg: string;
}

export interface MuffinType {
  id: number;
  name: string;
  likes: number;
}
export interface LikeMuffinAction extends Action<"muffins/like"> {
  payload: {
    id: number;
  };
}

// thunkActions
export const LOAD_REQUEST = "muffins/load_request";
export const LOAD_FAILURE = "muffins/load_failure";
export const LOAD_SUCCESS = "muffins/load_success";

export interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {}

export interface LoadFailureAction extends Action<typeof LOAD_FAILURE> {
  error: string;
}

export interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
  payload: {
    muffins: MuffinType[];
  };
}
