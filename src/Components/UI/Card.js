import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  if (props.searchResults.cod === 200) {
    return (
      <div className={`${style.card} `}>
        <img
          src={`http://openweathermap.org/img/wn/${props.searchResults.weather[0].icon}@2x.png`}
          alt="weather Icon"
        />
        <p className={style["description"]}>
          {props.searchResults.weather[0].description}
        </p>
        <p className={style["current-temp"]}>
          {props.searchResults.main.feels_like}
        </p>

        <p className={style["max-temp"]}>
          High: {props.searchResults.main.temp_max}
        </p>
        <p className={style["min-temp"]}>
          Low: {props.searchResults.main.temp_min}
        </p>
      </div>
    );
  } else {
    return (
      <div className={`${style.card} ${style.cardSide}`}>
        <p className={style["description"]}>
          Open Weather API doesn't correct spelling errors. Check your spelling
          and try again.
        </p>
      </div>
    );
  }
};

export default Card;
