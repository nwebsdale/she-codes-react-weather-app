import React from "react";
import "./Icon.css";

export default function Icon(props) {
  console.log(props.currentIcon);

  const iconMapping = {
    "01d": "fas fa-sun main-icon",
    "01n": "fas fa-moon main-icon",
    "02d": "fas fa-cloud-sun main-icon",
    "02n": "fas fa-cloud-sun main-icon",
    "03d": "fas fa-cloud-sun main-icon",
    "03n": "fas fa-cloud-sun main-icon",
    "04d": "fas fa-cloud main-icon",
    "04n": "fas fa-cloud main-icon",
    "09d": "fas fa-cloud-rain main-icon",
    "09n": "fas fa-cloud-rain main-icon",
    "10d": "fas fa-cloud-showers-heavy main-icon",
    "10n": "fas fa-cloud-showers-heavy main-icon",
    "11d": "fas fa-bolt main-icon",
    "11n": "fas fa-bolt main-icon",
    "13d": "fas fa-snowflake main-icon",
    "13n": "fas fa-snowflake main-icon",
    "50d": "fas fa-smog main-icon",
    "50n": "fas fa-smog main-icon",
  };

  return <i className={`${iconMapping[props.iconType]}`}></i>;
}
