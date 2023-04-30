import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const originalList = JSON.parse(window.localStorage.getItem("userarray")) ?? [];

root.render(
  <StrictMode>
    <App originalList={originalList} />
  </StrictMode>
);
