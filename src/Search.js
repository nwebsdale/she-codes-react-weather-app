import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import FormatDate from "./FormatDate";
import Weather from "./Weather";
import Variables from "./Variables.js";
import Forecast from "./Forecast.js";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultLocation);
  const [displayCity, setDisplayCity] = useState(props.defaultLocation);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "9ecd0df390ed7ae45c465a580e328de1";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
    setDisplayCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="row search-bar">
          <div className="col">
            <form onSubmit={handleSearch}>
              <div className="row form-inline">
                <div className="col-10">
                  <input
                    className="form-control enter-city shadow"
                    type="text"
                    placeholder="Enter City"
                    autoFocus={true}
                    autoComplete="false"
                    onChange={updateCity}
                  />

                  <input
                    className="form-control btn btn-primary search-form shadow"
                    type="submit"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row content-padding">
          <div className="col-12">
            <h1>
              {displayCity}, {weatherData.country}
            </h1>
          </div>
        </div>
        <div className="row content-padding">
          <FormatDate date={weatherData.date} />
        </div>
        <Weather
          maxTemp={Math.round(weatherData.highTemp)}
          minTemp={Math.round(weatherData.lowTemp)}
          weatherType={weatherData.description}
          icon={weatherData.icon}
        />
        <Variables
          windSpeed={Math.round(weatherData.wind)}
          sunUp={weatherData.sunrise}
          sunDown={weatherData.sunset}
          humid={weatherData.humidity}
          city={city}
        />
        <Forecast city={city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
