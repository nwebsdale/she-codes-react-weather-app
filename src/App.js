import "./App.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="footer">
          <a
            className="open-source"
            href="https://github.com/nwebsdale/she-codes-react-weather-app"
            target="_blank"
            target="_blank"
          >
            Open-source code
          </a>
          <p> by Natasha Websdale</p>
        </div>
      </div>
    </div>
  );
}
