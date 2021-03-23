import React from "react";
import "./Variables.css";

export default function Variables(props) {
  function sunUp(timestamp) {
    let date = new Date(timestamp);

    let currentHour = date.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMin = date.getMinutes();
    if (currentMin < 10) {
      currentMin = `0${currentMin}`;
    }

    return `${currentHour}:${currentMin}`;
  }
  function sunDown(timestamp) {
    let date = new Date(timestamp);

    let currentHour = date.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMin = date.getMinutes();
    if (currentMin < 10) {
      currentMin = `0${currentMin}`;
    }

    return `${currentHour}:${currentMin}`;
  }
  return (
    <div className="Variables">
      <div className="row weather-variables">
        <div className="col-4">
          <strong>Wind Speed</strong>
          <br />
          <i className="fas fa-wind wind"></i>
          <p>{props.windSpeed}mph</p>
        </div>
        <div className="col-4">
          <strong>Sunrise/set</strong>
          <br />
          <i className="far fa-sun sunrise"></i>
          <p>
            {sunUp(props.sunUp)} <br />
            {sunDown(props.sunDown)}
          </p>
        </div>
        <div className="col-4">
          <strong>Humidity</strong>
          <br />
          <i className="fas fa-tint humidity"></i>
          <p>{props.humid}%</p>
        </div>
      </div>
    </div>
  );
}
