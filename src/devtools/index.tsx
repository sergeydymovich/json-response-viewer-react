import React from "react";
import { createRoot } from "react-dom/client";
import RequestsContextProvider from "../context/RequestsContext";
import App from "./Devtools";

import "../assets/css/tailwind.css";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);

  if (!appContainer) {
    throw new Error("Cannot find appContainer");
  }

  chrome.devtools.panels.create("JSV", "./icons/icon.png", "devtools.html");

  const root = createRoot(appContainer);
  root.render(
    <RequestsContextProvider>
      <App />
    </RequestsContextProvider>
  );
}

init();
