import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
   
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[new Date(props.data.dt*1000).getDay()];

    return(
            <div className = "WeatherForecastPreview col">
                 {day}
                 <WeatherIcon code = {props.data.weather[0].icon} />
                 {Math.round(props.data.temp.day)}
                  
          </div>)
}