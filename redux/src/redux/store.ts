import { AnyAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
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
