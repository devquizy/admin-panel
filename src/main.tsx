import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "@/styles/main.css";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
