import React from "react";
import ReactDOM from "react-dom";
import STARTING_BACKGROUNDS from "../../backgrounds";
import style from "./Background.module.css";

export default function Background(props) {
  function getBackground() {
    let randomNumber = Math.floor(Math.random() * STARTING_BACKGROUNDS.length);
    console.log(randomNumber);
    let chosenBG = STARTING_BACKGROUNDS.filter(
      (bg, index) => bg.id === randomNumber
    );
    return chosenBG[0].url;
  }

  function RenderBackground(props) {
    return (
      <div
        className={style.appContainer}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0) 60%, rgba(0,0,0, .6) ), ${getBackground()}`,
        }}
      ></div>
    );
  }

  return ReactDOM.createPortal(
    <RenderBackground />,
    document.getElementById("container-root")
  );
}
