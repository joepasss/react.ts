import React from "react";
import { useSelector } from "react-redux";
import { selectMuffinsArray } from "../../redux/selectors";
import { MuffinType } from "../../redux/types";

const muffins = () => {
  const muffins = useSelector(selectMuffinsArray);

  return (
    <ul>
      <h3>MUFFINS</h3>
      {muffins.map((muffin: MuffinType) => {
        return <li key={muffin.id}>{muffin.name}</li>;
      })}
    </ul>
  );
};

export default muffins;
