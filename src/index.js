import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppLogin from "./AppLogin";
import "../src/index.css";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AppLogin />
  </BrowserRouter>
);

serviceWorker.unregister();
