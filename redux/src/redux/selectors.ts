import { StateType } from "./types";

export const selectMuffinsArray = (state: StateType) => state.muffins;
export const selectMuffinsLoading = (state: StateType) => state.muffinsLoading;
export const selectMuffinsError = (state: StateType) => state.muffinsError;
