import { MuffinLike, StateType } from "./types";
import { configureStore } from "@reduxjs/toolkit";

const initialState: StateType = {
  muffins: [
    { id: 1, name: "Chocolate chip muffin", likes: 11 },
    { id: 2, name: "Blueberry muffin", likes: 10 },
  ],
};

const reducer = (state = initialState, action: MuffinLike) => {
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
