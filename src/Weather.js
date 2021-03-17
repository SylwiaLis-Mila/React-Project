import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Stuttgart",
    date: "Monday 16:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: "12",
    humidity: 60,
    wind: 7
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              autofocus="on"
              autocomplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <button className="form-control shadow-sm">Current</button>
          </div>
        </div>
      </form>

      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description} </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={weatherData.imgUrl} className="float-left" />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>

              <span className="units">
                <a href="/">
                  <sup>°C</sup>
                </a>
                <sup>|</sup>
                <a href="/">
                  <sup>°F</sup>{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
