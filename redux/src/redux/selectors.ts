import { StateType } from "./types";

export const selectMuffinsArray = (state: StateType) => state.muffins;
export const selectIsLoading = (state: StateType) => state.isLoading;
export const selectErrorMsg = (state: StateType) => state.errorMsg;
