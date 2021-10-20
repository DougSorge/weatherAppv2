import React from "react";
import STARTING_BACKGROUNDS from "../../backgrounds";
import WEATHER_BACKGROUNDS from "../../weatherDependentBackgrounds";
import style from "./Background.module.css";

export default function Background(props) {
  function getBackground() {
    if (!props.currentWeatherCode) {
      let randomNumber = Math.floor(
        Math.random() * STARTING_BACKGROUNDS.length
      );
      let chosenBG = STARTING_BACKGROUNDS.filter(
        (bg, index) => bg.id === randomNumber
      );
      return chosenBG[0].url;
    } else if (
      props.currentWeatherCode > 199 &&
      props.currentWeatherCode <= 232
    ) {
      return WEATHER_BACKGROUNDS[0].url;
    } else if (
      props.currentWeatherCode > 299 &&
      props.currentWeatherCode <= 321
    ) {
      return WEATHER_BACKGROUNDS[1].url;
    } else if (
      props.currentWeatherCode > 499 &&
      props.currentWeatherCode <= 531
    ) {
      return WEATHER_BACKGROUNDS[2].url;
    } else if (
      props.currentWeatherCode > 599 &&
      props.currentWeatherCode <= 622
    ) {
      return WEATHER_BACKGROUNDS[3].url;
    } else if (
      props.currentWeatherCode > 699 &&
      props.currentWeatherCode <= 771
    ) {
      return WEATHER_BACKGROUNDS[4].url;
    } else if (props.currentWeatherCode === 781) {
      return WEATHER_BACKGROUNDS[5].url;
    } else if (props.currentWeatherCode === 800) {
      return WEATHER_BACKGROUNDS[6].url;
    } else if (
      props.currentWeatherCode > 800 &&
      props.currentWeatherCode < 804
    ) {
      return WEATHER_BACKGROUNDS[7].url;
    } else if (props.currentWeatherCode >= 804) {
      return WEATHER_BACKGROUNDS[8].url;
    }
  }

  return (
    <div
      className={style.appContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, .3) , rgba(0,0,0, .6) ), ${getBackground()}`,
      }}
    >
      {props.children}
    </div>
  );
}
