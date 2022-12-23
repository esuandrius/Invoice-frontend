import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppLogin from "./AppLogin";
import "../src/index.css";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";

import "./"
//import i18n from "./i18n";
import "./config";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
     <AppLogin />
  </BrowserRouter>
);

serviceWorker.unregister();
