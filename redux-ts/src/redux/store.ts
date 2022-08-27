import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import recorderReducer from "./recorder";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
