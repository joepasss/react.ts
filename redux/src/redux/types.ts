import { Action } from "redux";

export interface StateType {
  muffins: MuffinType[];
}

export interface MuffinType {
  id: number;
  name: string;
  likes: number;
}

// Actions
export interface MuffinLike extends Action<"muffins/like"> {
  payload: {
    id: number;
  };
}
