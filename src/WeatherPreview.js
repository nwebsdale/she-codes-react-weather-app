import React from "react";
import ForecastIcon from "./ForecastIcon.js";
import "./WeatherPreview.css";

export default function WeatherPreview(props) {
  let date = new Date(props.data.dt * 1000);
  function currentTimeDate() {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekdays[date.getDay()];
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }

    return `${day} | ${hour}:00`;
  }
  return (
    <div className="WeatherPreview border-right col days">
      <p>{currentTimeDate()}</p>{" "}
      <div className="row next-week-variables">
        {" "}
        <div className="col-6">
          <ForecastIcon iconType={props.data.weather[0].icon} />
        </div>{" "}
        <div className="col-6 next-week-text">
          {" "}
          <p>
            <strong className="forecast-max">
              {Math.round(props.data.main.temp_max)}°C
            </strong>{" "}
          </p>
          <p className="forecast-min">
            {Math.round(props.data.main.temp_min)}°C
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
