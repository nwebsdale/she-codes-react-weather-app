import React from "react";
import "./App.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultLocation="Rustington" />
        <div className="footer">
          <a
            className="open-source"
            href="https://github.com/nwebsdale/she-codes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <p> by Natasha Websdale</p>
        </div>
      </div>
    </div>
  );
}
