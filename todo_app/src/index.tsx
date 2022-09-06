import React from "react";
import ReactDOM from "react-dom/client";

// style & component
import "./index.css";
import App from "./components/App";

// redux
import { Provider } from "react-redux";
import store from "./components/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
