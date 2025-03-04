import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlayProvider } from "./contexts/Play";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayProvider>
      <App />
    </PlayProvider>
  </React.StrictMode>
);
