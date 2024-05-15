import ReactDom, { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
let root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
