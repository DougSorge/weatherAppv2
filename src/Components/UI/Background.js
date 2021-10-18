import React from "react";
import STARTING_BACKGROUNDS from "../../backgrounds";
import style from "./Background.module.css";

export default function Background(props) {
  function getBackground() {
    let randomNumber = Math.floor(Math.random() * STARTING_BACKGROUNDS.length);

    let chosenBG = STARTING_BACKGROUNDS.filter(
      (bg, index) => bg.id === randomNumber
    );
    return chosenBG[0].url;
  }

  return (
    <div
      className={style.appContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, .1) 60%, rgba(0,0,0, .6) ), ${getBackground()}`,
      }}
    >
      {props.children}
    </div>
  );
}
