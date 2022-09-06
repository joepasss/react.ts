import React from "react";
import Calendar from "../Calendar";

const appStyle: React.CSSProperties = {
  textAlign: "center",
};

const App = () => {
  return (
    <div className="App" style={appStyle}>
      <Calendar />
    </div>
  );
};

export default App;
