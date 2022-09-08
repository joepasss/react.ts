import { createStore } from "@reduxjs/toolkit";
import { Action, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import recorderReducer from "./recorder";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  recorder: recorderReducer,
  userEvent: userEventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)
);

export default store;
