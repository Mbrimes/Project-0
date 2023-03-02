// import React from "react";
// import ReactDOM from "react-dom";
// import Main from "./Main";
 
// ReactDOM.render(
//   <React.StrictMode> 
//       <Main /> 
//   </React.StrictMode>, 
//   document.getElementById("root")
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Main from "./Main";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);