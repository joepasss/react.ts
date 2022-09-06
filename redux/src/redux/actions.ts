import {
  LoadFailureAction,
  LoadRequestAction,
  LoadSuccessAction,
  LOAD_FAILURE,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  MuffinType,
  StateType,
} from "./types";
import { ThunkAction } from "redux-thunk";

export const likeMuffin = (muffinId: number) => ({
  type: "muffins/like",
  payload: { id: muffinId },
});

export const loadMuffins =
  (): ThunkAction<
    void,
    StateType,
    undefined,
    LoadRequestAction | LoadFailureAction | LoadSuccessAction
  > =>
  async (dispatch) => {
    dispatch({
      type: LOAD_REQUEST,
    });

    try {
      const response = await fetch("http://localhost:3001/muffins");
      const muffins: MuffinType[] = await response.json();

      dispatch({
        type: LOAD_SUCCESS,
        payload: {
          muffins: muffins,
        },
      });
    } catch (e) {
      dispatch({
        type: LOAD_FAILURE,
        error: "Failed to load muffins",
      });
    }
  };
