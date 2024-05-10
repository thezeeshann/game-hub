import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GameContextProvider from "./context/GameContext.tsx";
import SearchContextProvider from "./context/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
