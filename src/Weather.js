import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
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
          <WeatherInfo data = {weatherData}/>
          
          
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
