import React, { useState } from "react";
import "./Search.css";

export default function App() {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setDisplayCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
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
                  autoComplete={false}
                  onChange={updateCity}
                />

                <input
                  className="form-control btn btn-primary search-form shadow"
                  type="submit"
                  value="Search"
                />
              </div>
              <div className="col-2">
                <i className="fas fa-search-location location"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row content-padding">
        <div className="col-12">
          <h1>{displayCity}</h1>
        </div>
      </div>
      <div className="row content-padding">
        <div className="col-12">
          <h3>Thursday 21 January 2021</h3>
          <h3 className="time">Last updated: 21:00</h3>
        </div>
      </div>
    </div>
  );
}
