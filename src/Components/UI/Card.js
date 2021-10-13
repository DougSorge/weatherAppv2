import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${style.card} `}>
      <img
        src={`http://openweathermap.org/img/wn/${props.searchResults.weather[0].icon}@2x.png`}
        alt="weather Icon"
      />
      <p className={style["current-temp"]}>
        {props.searchResults.main.feels_like}
      </p>
      <div>
        <p className={style["max-temp"]}>
          {" "}
          High: {props.searchResults.main.temp_max}
        </p>
        <p className={style["min-temp"]}>
          {" "}
          Low: {props.searchResults.main.temp_min}
        </p>
      </div>
    </div>
  );
};

export default Card;
