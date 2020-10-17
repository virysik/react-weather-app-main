import React from "react";
import DateComponent from "./DateComponent";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return(
<div className = "WeatherInfo">   
    <div className="row">
            <div className="col-6">
              <h1>{props.data.city}</h1>
            </div>
            <div className="col-6 date">
              <DateComponent date={props.data.date} />
            </div>
          </div>

          <p className="text-capitalize">{props.data.description}</p>

          <div className="row">
            
            <div className="col-3">
              <WeatherIcon code = {props.data.icon} />
            </div>
            <div className="col-4 temperature">
             <WeatherTemperature celsius = {props.data.temperature} />
            </div>
            <div className="col-5 attributes ">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
              </ul>
            </div>
          </div>
         </div> )
}