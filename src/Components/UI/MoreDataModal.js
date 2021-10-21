import React from "react";
import ReactDOM from "react-dom";
import style from "./MoreDataModal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={`${style.backdrop}`}
      onClick={(e) => {
        if (e.target.classList.contains(style.backdrop)) {
          props.toggleModal();
        }
      }}
    >
      {props.children}
    </div>
  );
};

const ModalContent = (props) => {
  function timeCreator(time) {
    return new Date(time * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  //   converting the wind degrees as provided by the API into a direction.
  let directions = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
  ];
  function convertDegreestoDirection(deg) {
    return Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  }

  return (
    <div className={`${style.modal}`}>
      <ul className={style.weatherDataList}>
        <li>{`Feels Like: Day: ${props.day.feels_like.day}`}</li>
        <li>{`Feels Like: Night: ${props.day.feels_like.night}`}</li>

        <li>{`Humidity: ${props.day.humidity}%`}</li>
        <li>{`Sunrise: ${timeCreator(props.day.sunrise)}`}</li>
        <li>{`Sunset: ${timeCreator(props.day.sunrise)}`}</li>
        <li>{`Moonrise: ${timeCreator(props.day.moonrise)}`}</li>
        <li>{`Moonset: ${timeCreator(props.day.moonrise)}`}</li>
        <li>{`UV-Index: ${props.day.uvi}`}</li>
        <li>{`Wind Speed: ${props.day.wind_speed} mph`}</li>
        <li>{`Wind Direction: ${
          directions[convertDegreestoDirection(props.day.wind_deg)]
        }`}</li>
        <li>{`Wind Gust: ${props.day.wind_gust} mph`}</li>
        <li>{`Atomspheric Pressure: ${props.day.pressure} mb`}</li>
      </ul>
    </div>
  );
};

export default function MoreDataModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          toggleModal={() => {
            props.toggleModal();
          }}
        >
          <ModalContent day={props.data} />
        </Backdrop>,
        document.getElementById("modal-root")
      )}
    </>
  );
}
