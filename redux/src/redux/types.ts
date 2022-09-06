import { Action } from "redux";

export interface StateType {
  muffins: MuffinType[];
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
