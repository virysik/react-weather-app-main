import React from "react";
import DateComponent from "./DateComponent";

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
              <img src={props.data.icon} alt={props.data.description} />
            </div>
            <div className="col-3">
              <h2>{props.data.temperature}</h2>
              <span>°C</span>
            </div>
            <div className="col-6 attributes ">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
              </ul>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-2">
              <ul>
                <li>14:00</li>
                <li>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                    alt="cloudy"
                  />
                </li>
                <li>16°C</li>
              </ul>
            </div>
          </div>
          </div> )
}