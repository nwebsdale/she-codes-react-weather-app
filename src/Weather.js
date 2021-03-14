import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row align-items-center">
        <div className="col-6">
          <i className="fas fa-cloud main-icon"></i>
        </div>
        <div className="col-6">
          <p className="row temp">
            <strong>8°C</strong>
          </p>

          <p className="row temp">3°C</p>

          <div className="row">
            <div className="temp-unit">
              <p>
                <a href="#">°C</a> | <a href="#">°F</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row content-padding">
        <div className="col-12">
          <h2 className="weather-description">thick cloud</h2>
        </div>
      </div>
    </div>
  );
}
