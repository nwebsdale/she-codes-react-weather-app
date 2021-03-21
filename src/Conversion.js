import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("metric");
  function showF(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showC(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div className="Conversion">
        <p className="row temp">
          <strong>{props.celsiusMax}°C</strong>
        </p>

        <p className="row temp">{props.celsiusMin}°C</p>

        <div className="row">
          <div className="temp-unit">
            <p>
              °C |{" "}
              <a rel="noreferrer" href="/" onClick={showF}>
                °F
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Conversion">
        <p className="row temp">
          <strong>{Math.round((props.celsiusMax * 9) / 5 + 32)}°F</strong>
        </p>

        <p className="row temp">
          {Math.round((props.celsiusMin * 9) / 5 + 32)}°F
        </p>

        <div className="row">
          <div className="temp-unit">
            <p>
              <a rel="noreferrer" href="/" onClick={showC}>
                °C
              </a>{" "}
              | °F
            </p>
          </div>
        </div>
      </div>
    );
  }
}
