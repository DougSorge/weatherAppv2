import React, { useState } from "react";
import style from "./Card.module.css";
import MoreDataModal from "./MoreDataModal";

export default function ForecastCard(props) {
  // Used to open and close additional data modal upon card click.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // function to open and close modal
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen && (
        <MoreDataModal
          data={props.day}
          modalStatus={isModalOpen}
          toggleModal={toggleModal}
        />
      )}
      <div
        className={`${style.card} ${style.forecastCard}`}
        onClick={() => {
          toggleModal();
        }}
      >
        <p className={style["date"]}>
          {new Date(props.day.dt * 1000).toLocaleDateString()}
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
          alt="weather Icon"
        />
        <p className={style["description"]}>
          {props.day.weather[0].description}
        </p>
        <p className={style["current-temp"]}>{props.day.temp.day}</p>
        <div>
          <p className={style["max-temp"]}>High: {props.day.temp.max}</p>
          <p className={style["min-temp"]}>Low: {props.day.temp.min}</p>
        </div>
        <p className={style["more-data"]}>More Data &rarr;</p>
      </div>
    </>
  );
}
