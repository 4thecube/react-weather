import React from "react";

import "./Field.css";

const Field = ({ weather }) => {
  return (
    <div className="field">
      <span className="classic-data time">
        {weather.dt_txt.split(" ")[1].split(":")[0]}
      </span>
      <div className="image-data">
        <img
          className={weather.sys.pod === "d" ? "day" : "night"}
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        ></img>
      </div>
      <span
        className={`${weather.main.temp > 0 ? "hot" : "cold"} classic-data`}
      >
        {" "}
        {Math.round(weather.main.temp)}
      </span>
      <span
        className={`${
          weather.main.feels_like > 0 ? "hot" : "cold"
        } classic-data`}
      >
        {Math.round(weather.main.feels_like)}
      </span>
      <span
        className={`${
          weather.main.humidity > 65 ||  weather.main.humidity < 40
            ? "hot"
            : null
        } classic-data`}
      >
        {weather.main.humidity}
      </span>
      <span className="classic-data">{weather.main.pressure}</span>
      <span className="classic-data">{Math.round(weather.wind.speed)}</span>
    </div>
  );
};

export default Field;
