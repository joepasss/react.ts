import React from "react";
import Calendar from "../Calendar";
import Recorder from "../Recorder";

const appStyle: React.CSSProperties = {
  textAlign: "center",
};

const App = () => {
  return (
    <div className="App" style={appStyle}>
      <Recorder />
      <Calendar />
    </div>
  );
};

export default App;
