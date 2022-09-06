import { LikeMuffinAction, StateType } from "./types";
import { configureStore } from "@reduxjs/toolkit";

const initialState: StateType = {
  muffins: [
    { id: 1, name: "Chocolate chip muffin", likes: 10 },
    { id: 2, name: "Bluberry muffin", likes: 8 },
  ],
};

const reducer = (state = initialState, action: LikeMuffinAction) => {
  switch (action.type) {
    case "muffins/like":
      const { id } = action.payload;
      return {
        ...state,
        muffins: state.muffins.map((muffin) => {
          if (muffin.id === id) {
            return { ...muffin, likes: muffin.likes + 1 };
          }

          return muffin;
        }),
      };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
