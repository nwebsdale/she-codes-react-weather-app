import React from "react";
import "./FormatDate.css";

export default function FormatDate(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDay = weekdays[props.date.getDay()];
  let currentDate = props.date.getDate();
  let currentMonth = months[props.date.getMonth()];
  let currentYear = props.date.getFullYear();
  let currentHours = props.date.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMins = props.date.getMinutes();
  if (currentMins < 10) {
    currentMins = `0${currentMins}`;
  }

  return (
    <div className="FormatDate">
      <h3>
        {currentDay} {currentDate} {currentMonth} {currentYear}
      </h3>

      <h3 className="time">
        Last Updated: {currentHours}:{currentMins}
      </h3>
    </div>
  );
}
