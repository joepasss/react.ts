import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMuffin } from "../../redux/actions";
import { selectMuffinsArray } from "../../redux/selectors";
import { MuffinType } from "../../redux/types";

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);
  const dispatch = useDispatch();

  return (
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
