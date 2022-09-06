import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/mainStyle.scss";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
