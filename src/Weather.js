import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row align-items-center">
        <div className="col-6">
          <i className="fas fa-cloud main-icon"></i>
        </div>
        <div className="col-6">
          <p className="row temp">
            <strong>{props.maxTemp}°C</strong>
          </p>

          <p className="row temp">{props.minTemp}°C</p>

          <div className="row">
            <div className="temp-unit">
              <p>
                <a rel="noreferrer" href=" ">
                  °C
                </a>{" "}
                |{" "}
                <a rel="noreferrer" href=" ">
                  °F
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row content-padding">
        <div className="col-12">
          <h2 className="weather-description">{props.weatherType}</h2>
        </div>
      </div>
    </div>
  );
}
