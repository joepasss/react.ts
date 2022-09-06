import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMuffin, loadMuffins } from "../../redux/actions";
import {
  selectMuffinsArray,
  selectMuffinsError,
  selectMuffinsLoading,
} from "../../redux/selectors";
import { MuffinType } from "../../redux/types";

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);
  const muffinsLoading = useSelector(selectMuffinsLoading);
  const muffinsError = useSelector(selectMuffinsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMuffins());
  }, []);

  return muffinsLoading ? (
    <p>Loading...</p>
  ) : muffinsError ? (
    <p>{muffinsError}</p>
  ) : (
    <ul className="muffins">
      <h3 className="muffins__header">MUFFINS</h3>
      {muffins.map((muffin: MuffinType) => {
        const handleClick = () => {
          dispatch(likeMuffin(muffin.id));
        };

        return (
          <li key={muffin.id} className="muffins__item">
            {muffin.name}
            <button onClick={handleClick}>Like</button>
            <i>{muffin.likes}</i>
          </li>
        );
      })}
    </ul>
  );
};

export default Muffins;
