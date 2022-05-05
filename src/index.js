import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@contentstack/venus-components/build/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
