import React from "react";
import "./Variables.css";

export default function Variables() {
  return (
    <div className="Variables">
      <div className="row weather-variables">
        <div className="col-4">
          <strong>Wind Speed</strong>
          <br />
          <i className="fas fa-wind wind"></i>
          <p>11mph</p>
        </div>
        <div className="col-4">
          <strong>Sunrise/set</strong>
          <br />
          <i className="far fa-sun sunrise"></i>
          <p>
            08:21 <br />
            16:28
          </p>
        </div>
        <div className="col-4">
          <strong>Humidity</strong>
          <br />
          <i className="fas fa-tint humidity"></i>
          <p>72%</p>
        </div>
      </div>
    </div>
  );
}
