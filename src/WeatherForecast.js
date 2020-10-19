import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState({ready: false});

function handleForecast(response) { 
    setForecast({
        element: response.data,
        ready: true
    });
}

    if(forecast.ready && props.lat === forecast.element.lat) {
    return (
        <div className = "WeatherForecast row">
            <WeatherForecastPreview data = {forecast.element.daily[1]}/>
            <WeatherForecastPreview data = {forecast.element.daily[2]}/>
            <WeatherForecastPreview data = {forecast.element.daily[3]}/>
            <WeatherForecastPreview data = {forecast.element.daily[4]}/>
            <WeatherForecastPreview data = {forecast.element.daily[5]}/>
         </div>
    );
    } else {
        const apiKey = "b809e096c73a6d18c5b757c80921ea71";
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}1&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecast);
        return (
      <Loader
        type="ThreeDots"
        color="white"
        height={50}
        width={50}
        timeout={3000}
      />
    );
    }
}