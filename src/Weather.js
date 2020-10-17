import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity)
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon
    });
  }

 function showPosition(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const apiKey = "974437790c20752769b5d2ac36ae13ef";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
}

  function showCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition)  
  }

  function search() {
    const apiKey = "974437790c20752769b5d2ac36ae13ef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
   event.preventDefault();
   search();
  }

function handleChange(event) {
   setCity(event.target.value);
}

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <small>Enter a city:</small>

           <form onSubmit = {handleSubmit}>
             <div className="row">
               <div className="col-6">
                 <input
                   type="search"
                   onChange = {handleChange}
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
                 onClick = {showCurrentPosition}
                 className="btn btn-secondary"
                 value="current"
               />
             </div>
           </form>

           <br />
            <WeatherInfo data = {weatherData}/>
           <br />
            <WeatherForecast lat = {weatherData.latitude} lon = {weatherData.longitude} />
       </div>
     </div>
    );
  } else {
  search();
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
