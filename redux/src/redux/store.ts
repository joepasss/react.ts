import {
  LikeMuffinAction,
  LoadFailureAction,
  LoadRequestAction,
  LoadSuccessAction,
  StateType,
} from "./types";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState: StateType = {
  muffins: [],
  isLoading: false,
  errorMsg: "",
};

const reducer = (
  state = initialState,
  action:
    | LikeMuffinAction
    | LoadRequestAction
    | LoadSuccessAction
    | LoadFailureAction
) => {
  switch (action.type) {
    case "muffins/like":
      const { id } = action.payload;
      return {
        ...state,
        muffins: state.muffins.map((muffin) => {
          if (muffin.id === id) {
            return { ...muffin, likes: muffin.likes + 1 };
          }

          return muffin;
        }),
      };

    case "muffins/load_request":
      return { ...state, isLoading: true };

    case "muffins/load_success":
      const { muffins } = action.payload;
      return { ...state, isLoading: false, muffins };

    case "muffins/load_failure":
      const { error } = action;
      return { ...state, isLoading: false, errorMsg: error };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;
