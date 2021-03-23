import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherPreview from "./WeatherPreview";
// import ForecastIcon from "./ForecastIcon.js";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <WeatherPreview data={forecast.list[0]} />
        <WeatherPreview data={forecast.list[8]} />
        <WeatherPreview data={forecast.list[16]} />
        <WeatherPreview data={forecast.list[24]} />
        <WeatherPreview data={forecast.list[32]} />
      </div>
    );
  } else {
    let apiKey = "9ecd0df390ed7ae45c465a580e328de1";
    let unit = "metric";
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiForecastUrl).then(handleForecastResponse);
    return null;
  }
}
