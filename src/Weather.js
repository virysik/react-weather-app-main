import React, { useState } from "react";
import axios from "axios";
import DateComponent from "./DateComponent";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <small>Enter a city:</small>

          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control"
                  autoComplete="off"
                />
              </div>

              <input
                type="submit"
                className="btn btn-secondary"
                value="search"
              />

              <input
                type="button"
                className="btn btn-secondary"
                value="current"
              />
            </div>
          </form>

          <br />

          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-6 date">
              <DateComponent date={weatherData.date} />
            </div>
          </div>

          <p className="text-capitalize">{weatherData.description}</p>

          <div className="row">
            <div className="col-3">
              <img src={weatherData.icon} alt={weatherData.description} />
            </div>
            <div className="col-3">
              <h2>{weatherData.temperature}</h2>
              <span>°C</span>
            </div>
            <div className="col-6 attributes ">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
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
        </div>
      </div>
    );
  } else {
    const apiKey = "974437790c20752769b5d2ac36ae13ef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader
        type="BallTriangle"
        color="#5a6168"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
