import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";
import UserInput from "./UserInput/UserInput";
import style from "./SearchFunctionality.module.css";
import ForecastCard from "../UI/ForecastCard";

export default function SearchFunctionality(props) {
  let myAPIKey = `c7301a763c7578fc916431e59d132990`;
  // takes data from city search results to populate Card component with weather information.
  const [searchResults, setSearchResults] = useState();
  // takes data from city search results to populate Card component with weather information.
  const [geoResults, setGeoResults] = useState();

  //used to automatically pull weather data based on device location.

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${myAPIKey}`
        )
          .then((response) => response.json())
          .then((data) => setGeoResults(data));
      },
      () => {
        console.log(`Location Couldn't be accuired`);
      },
      {
        timeout: 12000,
        maximumAge: 60000,
        enableHighAccuracy: true,
      }
    );
  }, [myAPIKey]);

  const getLocationForecastAgain = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${myAPIKey}`
        )
          .then((response) => response.json())
          .then((data) => setGeoResults(data));
      },
      () => {
        console.log(`Location Couldn't be accuired`);
      },
      {
        timeout: 12000,
        maximumAge: 60000,
        enableHighAccuracy: true,
      }
    );
    setSearchResults();
  }, [myAPIKey]);

  useEffect(() => {
    if (searchResults && !geoResults) {
      let button = document.createElement("button");
      button.type = "button";
      button.classList.add(`${style.button}`);
      button.innerText = `Location Forecast`;
      button.addEventListener("click", getLocationForecastAgain);
      document.getElementById("form").appendChild(button);
    }
  }, [searchResults, geoResults, getLocationForecastAgain]);

  useEffect(() => {
    if (document.getElementById(`form`).children[1] && geoResults) {
      document.getElementById(`form`).children[1].remove();
    }
  }, [searchResults, geoResults]);

  // used to pull search term from userInput component and perform API call.
  const performSearchByCityName = (query) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${myAPIKey}`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
    setGeoResults();
  };

  if (geoResults && !searchResults) {
    return (
      <>
        <UserInput performSearch={performSearchByCityName} />
        <h1 className={style.header}>Forecast for your current location</h1>
        <div className={`${style.resultsContainer} ${style.forecastContainer}`}>
          {geoResults.daily.map((day, index) => (
            <ForecastCard key={index * Math.random()} day={day} />
          ))}
        </div>
        <p className={style.creditPara}>
          Data Provided By <strong>OpenWeather (TM)</strong>
        </p>
      </>
    );
  } else if (searchResults && !geoResults) {
    return (
      <>
        <UserInput performSearch={performSearchByCityName} />
        <h1 className={style.header}>
          Current Weather for {searchResults.name}
        </h1>
        <div className={style.resultsContainer}>
          <Card searchResults={searchResults} />
        </div>
        <p className={style.creditPara}>
          Data Provided By <strong>OpenWeather (TM)</strong>
        </p>
      </>
    );
  } else {
    return <UserInput performSearch={performSearchByCityName} />;
  }
}
