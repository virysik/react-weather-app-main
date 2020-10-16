import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const[unit, setUnit] = useState("celsius");

function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function changeToCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit() {
    return (props.celsius * 9)/5 + 32;
}

    if (unit === "celsius") {
    return (
        <div className = "WeatherTemperature">
              <h2>{props.celsius}<span>°C | <a href = "/" onClick = {changeToFahrenheit}>°F</a></span></h2>
        </div>
    )
      } else {
           return (
             <div className = "WeatherTemperature">
                   <h2>{Math.round(fahrenheit())}<span><a href = "/" onClick = {changeToCelcius}>°C</a> | °F</span></h2>
             </div>
           );
         }
      }