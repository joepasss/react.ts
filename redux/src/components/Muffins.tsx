import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMuffin } from "../redux/actions";
import { selectMuffinsArray } from "../redux/selectors";
import { MuffinType } from "../redux/types";

const muffinStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const muffinH3Style: React.CSSProperties = {
  fontSize: "3rem",
  margin: 0,
  padding: "3rem",
};

const muffinListContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
};

const muffinListStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  listStyle: "none",
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "20rem 4rem 4rem",
  placeItems: "center",
};

const muffinLikeButtonStyle: React.CSSProperties = {
  width: "3rem",
  aspectRatio: "1 / 1",
  border: "none",
  borderRadius: "50%",
  color: "red",
  fontSize: "2rem",
  cursor: "pointer",
};

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);
  const dispatch = useDispatch();

  return (
    <div style={muffinStyle}>
      <h3 style={muffinH3Style}>Muffins</h3>

      <ul style={muffinListContainerStyle}>
        {muffins.map((muffin: MuffinType) => {
          const handleClick = () => {
            dispatch(likeMuffin(muffin.id));
          };

          return (
            <li key={muffin.id} style={muffinListStyle}>
              <p>{muffin.name}</p>
              <p>{muffin.likes}</p>
              <button style={muffinLikeButtonStyle} onClick={handleClick}>
                ♥
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Muffins;
