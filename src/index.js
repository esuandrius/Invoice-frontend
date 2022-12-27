import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLogin from "./AppLogin";
import "../src/index.css";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";

import "./"
import "./config";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
     <AppLogin />
  </BrowserRouter>
);

serviceWorker.unregister();
