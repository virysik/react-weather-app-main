import React from "react";
import "./Weather.css";

export default function Weather() {
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

            <input type="submit" className="btn btn-secondary" value="search" />

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
            <h1>New York</h1>
          </div>
          <div className="col-6">
            <ul>
              <li>Updated at 11:47</li>
              <li>10 October</li>
              <li>Saturday</li>
            </ul>
          </div>
        </div>

        <p>Clear Sky</p>

        <div className="row">
          <div className="col-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear sky"
            />
          </div>
          <div className="col-3">
            <h2>15</h2>
            <span>°C</span>
          </div>
          <div className="col-6 ">
            <ul>
              <li>Humidity: 72%</li>
              <li>Wind: 5km/h</li>
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
}
