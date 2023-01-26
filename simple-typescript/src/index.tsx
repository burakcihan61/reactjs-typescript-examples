import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import Application from "./components/Character/Application";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Application />
  </>
);
