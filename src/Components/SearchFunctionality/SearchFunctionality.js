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
          // .then((data) => console.log(data))
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
          // .then((data) => console.log(data))
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

  // This runs in order to create the button that lets you switch back to location forecast after performing a search. It checks if the searchResults state is populated and that the geoResults state is not populated AND that the form does not already have this button created. If those conditions are met the button is generated / appended to the form. An event listener is attached to the button to run the function that calls the geolocation and api search once again.
  // The else if block checks to see if the button exists AND that geoResults have been generated. If these conditions are met the button is removed from the DOM.
  // This was structured this way because the button was being generated over and over each time I would perform a search or switch back to location forecast mode. This fixed it. High Five!
  useEffect(() => {
    if (
      searchResults &&
      !geoResults &&
      !document.getElementById(`form`).children[1]
    ) {
      let button = document.createElement("button");
      button.type = "button";
      button.classList.add(`${style.button}`);
      button.innerText = `Location Forecast`;
      button.addEventListener("click", getLocationForecastAgain);
      document.getElementById("form").appendChild(button);
    } else if (document.getElementById(`form`).children[1] && geoResults) {
      document.getElementById(`form`).children[1].remove();
    }
  }, [searchResults, geoResults, getLocationForecastAgain]);

  // used to pull search term from userInput component and perform API call.
  const performSearchByCityName = (query) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${myAPIKey}`
    )
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setSearchResults(data));
    setGeoResults();
  };

  if (geoResults && !searchResults) {
    props.getWeatherCode(geoResults.current.weather[0].id);
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
    if (searchResults.weather) {
      props.getWeatherCode(searchResults.weather[0].id);
    }
    return (
      <>
        <UserInput performSearch={performSearchByCityName} />
        <h1 className={style.header}>
          Current Weather for {searchResults.name}
        </h1>
        <div className={style.resultsContainer}>
          <Card searchResults={searchResults} />
          {/* <Card>
            <img
              src={`http://openweathermap.org/img/wn/${searchResults.weather[0].icon}@2x.png`}
              alt="weather Icon"
            />
            <p className={style["description"]}>
              {searchResults.weather[0].description}
            </p>
            <p className={style["current-temp"]}>
              {searchResults.main.feels_like}
            </p>

            <p className={style["max-temp"]}>
              High: {searchResults.main.temp_max}
            </p>
            <p className={style["min-temp"]}>
              Low: {searchResults.main.temp_min}
            </p>
          </Card> */}
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
