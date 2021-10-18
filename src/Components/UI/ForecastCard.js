import React from "react";
import style from "./Card.module.css";

export default function ForecastCard(props) {
  return (
    <div className={`${style.card} ${style.forecastCard}`}>
      <img
        src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
        alt="weather Icon"
      />
      <p className={style["current-temp"]}>{props.day.temp.day}</p>
      <div>
        <p className={style["max-temp"]}>High: {props.day.temp.max}</p>
        <p className={style["min-temp"]}>Low: {props.day.temp.min}</p>
      </div>
    </div>
  );
}
