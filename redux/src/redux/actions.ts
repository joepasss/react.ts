import {
  StateType,
  LoadFailureAction,
  LoadRequestAction,
  LoadSuccessAction,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  MuffinType,
} from "./types";
import { ThunkAction } from "./../../node_modules/redux-thunk/src/types";
export const likeMuffin = (muffinId: number) => ({
  type: "muffins/like",
  payload: { id: muffinId },
});

export const loadMuffins =
  (): ThunkAction<
    void,
    StateType,
    undefined,
    LoadRequestAction | LoadSuccessAction | LoadFailureAction
  > =>
  async (dispatch) => {
    dispatch({
      type: LOAD_REQUEST,
    });

    try {
      const response = await fetch(`http://localhost:3001/muffins`);
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
