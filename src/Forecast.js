import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row next-week content-padding">
        <div className="border-right col days">
          <p>Mon | 00:00</p>
          <div className="row next-week-variables">
            <div className="col-6">
              <i className="fas fa-cloud-sun"></i>
            </div>
            <div className="col-6 next-week-text">
              <p>
                <strong className="forecast-max">10°C</strong>
              </p>
              <p className="forecast-min">5°C</p>
            </div>
          </div>
        </div>
        <div className="border-right col days">
          <p>Tue | 00:00</p>
          <div className="row next-week-variables">
            <div className="col-6">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="col-6 next-week-text">
              <p>
                <strong className="forecast-max">8°C</strong>
              </p>
              <p className="forecast-min">6°C</p>
            </div>
          </div>
        </div>
        <div className="border-right col days">
          <p>Wed | 00:00</p>
          <div className="row next-week-variables">
            <div className="col-6">
              <i className="fas fa-cloud-rain"></i>
            </div>
            <div className="col-6 next-week-text">
              <p>
                <strong className="forecast-max">10°C</strong>
              </p>
              <p className="forecast-min">7°C</p>
            </div>
          </div>
        </div>
        <div className="border-right col days">
          <p>Thu | 00:00</p>
          <div className="row next-week-variables">
            <div className="col-6">
              <i className="fas fa-cloud-rain"></i>
            </div>
            <div className="col-6 next-week-text">
              <p>
                <strong className="forecast-max">5°C</strong>
              </p>
              <p className="forecast-min">2°C</p>
            </div>
          </div>
        </div>
        <div className="border-right col days">
          <p>Fri | 00:00</p>
          <div className="row next-week-variables">
            <div className="col-6">
              <i className="fas fa-cloud-sun-rain"></i>
            </div>
            <div className="col-6 next-week-text">
              <p>
                <strong className="forecast-max">4°C</strong>
              </p>
              <p className="forecast-min">0°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
