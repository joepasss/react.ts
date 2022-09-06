import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import recorderReducer from "./recorder";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  recorder: recorderReducer,
  userEvent: userEventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
