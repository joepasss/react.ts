import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
});

export default store;
