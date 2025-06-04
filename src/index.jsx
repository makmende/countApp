import React from "react";
import ReactDOM from "react-dom";
import Count from "./components/countApp";
import TimeApp from "./components/timeApp";

ReactDOM.render(
  <div>
    <Count />
    <TimeApp />
  </div>,
  document.getElementById("root")
);
