import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
   
    function day() {
     let now = new Date(props.data.dt*1000)
     let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[now.getDay()];

    let hours = now.getHours();
     if (hours < 10) {
     hours = `0${hours}`;
   }
    let minutes = now.getMinutes();
     if (minutes < 10) {
     minutes = `0${minutes}`;
   }  
    return `${day} ${hours}:${minutes}` ;
 } 

    function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°C`;
}

    return(
            <div className = "WeatherForecastPreview col">
                 {day()}
                 <WeatherIcon code = {props.data.weather[0].icon} />
                 {temperature()}
                  
          </div>);
}