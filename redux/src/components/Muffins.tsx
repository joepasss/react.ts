import React from "react";
import { useSelector } from "react-redux";
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
};

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);

  return (
    <div style={muffinStyle}>
      <h3 style={muffinH3Style}>Muffins</h3>

      <ul style={muffinListContainerStyle}>
        {muffins.map((muffin: MuffinType) => {
          return (
            <li key={muffin.id} style={muffinListStyle}>
              {muffin.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Muffins;
