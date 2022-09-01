import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import recorderReducer from "./recorder";
import userEventsReducer from "./user-events";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
