import React from "react";

import style from "./UserInput.module.css";

export default function UserInput(props) {
  let myAPIKey = `c7301a763c7578fc916431e59d132990`;

  const fetchData = (event) => {
    event.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        document.querySelector("#searchBar").value
      }&units=imperial&appid=${myAPIKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        props.getResults(data);
      });
  };

  return (
    <form className={`${style.form} `} onSubmit={fetchData}>
      <input
        type="text"
        name="getData"
        id="searchBar"
        placeholder="Search By City Name"
      ></input>
    </form>
  );
}
