import React from "react";
import Field from "../field/Field";

import moment from "moment";

import "./Card.css";

const Card = ({ weather, currentDate }) => {
  // let endOfMonth = "ня";
  // let date =
  //   currentDate +
  //   " " +
  //   new Date()
  //     .toLocaleString("default", { month: "long" })
  //     .replace(/ень/i, endOfMonth);
  const day = moment(currentDate).date();
  const month = moment(currentDate).month("MM").format("MMMM");
  const date = day + " " + month;

  return (
    <div className="today-container">
      <div className="date-container">
        <span className="date">{date}</span>
      </div>
      <div className="card-container">
        <div className="measure">
          <span className="measure-data">Час</span>
          <span className="measure-image">Опади</span>
          <span className="measure-data">Температура, °C</span>
          <span className="measure-data">Відчувається як, °C</span>
          <span className="measure-data">Вологість, %</span>
          <span className="measure-data">Тиск, мм.рт.с</span>
          <span className="measure-data">Вітер, м/с</span>
        </div>
        {weather.list.map((weather) =>
          parseInt(day) ===
          parseInt(weather.dt_txt.split(" ")[0].split("-")[2]) ? (
            <Field key={weather.dt} weather={weather} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Card;
