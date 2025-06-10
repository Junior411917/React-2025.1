import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Effect from "./components/Effect";
//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Effect />
  </StrictMode>
);
