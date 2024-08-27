import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Modals from "./layouts/Modals";
import reportWebVitals from "./reportWebVitals";
import { GlobalContextProvider } from "./contexts/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Modals />
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
