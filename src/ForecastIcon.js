import React from "react";
import "./Icon.css";

export default function Icon(props) {
  const iconMapping = {
    "01d": "fas fa-sun",
    "01n": "fas fa-moon",
    "02d": "fas fa-cloud-sun",
    "02n": "fas fa-cloud-sun",
    "03d": "fas fa-cloud-sun",
    "03n": "fas fa-cloud-sun",
    "04d": "fas fa-cloud",
    "04n": "fas fa-cloud",
    "09d": "fas fa-cloud-rain",
    "09n": "fas fa-cloud-rain",
    "10d": "fas fa-cloud-showers-heavy",
    "10n": "fas fa-cloud-showers-heavy",
    "11d": "fas fa-bolt",
    "11n": "fas fa-bolt ",
    "13d": "fas fa-snowflake",
    "13n": "fas fa-snowflake",
    "50d": "fas fa-smog",
    "50n": "fas fa-smog",
  };

  return <i className={`${iconMapping[props.iconType]}`}></i>;
}
