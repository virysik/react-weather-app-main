import React, {useState} from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState(null);

function handleForecast(response) { 
    setForecast(response.data);
    setReady(true);
}

    if(ready && props.lat === forecast.lat) {
    return (
        <div className = "WeatherForecast row">
            <WeatherForecastPreview data = {forecast.daily[1]}/>
            <WeatherForecastPreview data = {forecast.daily[2]}/>
            <WeatherForecastPreview data = {forecast.daily[3]}/>
            <WeatherForecastPreview data = {forecast.daily[4]}/>
            <WeatherForecastPreview data = {forecast.daily[5]}/>
         </div>
    );
    } else {
        const apiKey = "974437790c20752769b5d2ac36ae13ef";
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}1&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecast);
        return "Loading..";
    }
}