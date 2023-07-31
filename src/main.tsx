import { BrowserRouter } from "react-router-dom";
import { Providers } from "./contexts/index.tsx";
import GlobalStyle from "./styles/global.ts";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
