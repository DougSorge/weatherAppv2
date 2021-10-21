// Very Important!! I realize that this is NOT how a reusable card component should function. The data should be rendered between opening and closing Card tags in the component where it is generated. In this case that would be the searchfunctionality component.
// I will need to rework a fair amount of logic to make this properly reusable. In due time.

import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  if (props.searchResults.cod === 200) {
    // let date = new Date(props.searchResults.dt * 1000).toLocaleDateString();
    return (
      <div className={`${style.card} `}>
        <p className={style["date"]}>
          {new Date(props.searchResults.dt * 1000).toLocaleDateString()}
        </p>
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
        {/* {props.children} */}
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
