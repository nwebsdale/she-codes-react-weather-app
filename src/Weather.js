import React from "react";
import Icon from "./Icon.js";
import Conversion from "./Conversion";
import "./Weather.css";

export default function Weather(props) {
  let currentIcon = props.icon;
  return (
    <div className="Weather">
      <div className="row align-items-center">
        <div className="col-6">
          <Icon iconType={currentIcon} />
        </div>
        <div className="col-6">
          <Conversion celsiusMax={props.maxTemp} celsiusMin={props.minTemp} />
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
