import React from "react";
import ReactDOM from "react-dom";
//import pi, { doublePi, triplePi } from "./Math";
import * as pi from "./Math";
ReactDOM.render(
  // <ul>
  //   <li>{pi}</li>
  //   <li>{doublePi()}</li>
  //   <li>{triplePi()}</li>
  // </ul>,
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
