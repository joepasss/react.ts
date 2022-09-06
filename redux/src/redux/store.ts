import { StateType } from "./types";
import { AnyAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState: StateType = {
  muffins: [
    { id: 1, name: "Chocolate chip muffin" },
    { id: 2, name: "Blueberry muffin" },
  ],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
