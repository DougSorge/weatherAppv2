import React, { useState } from "react";
import Background from "./Components/UI/Background";

import NavBar from "./Components/NavBar/NavBar";
import TimeDateContainer from "./Components/TimeDateDisplay/TimeDateContainer";
import TimeDate from "./Components/TimeDateDisplay/TimeDate";
import "./App.css";
import SearchFunctionality from "./Components/SearchFunctionality/SearchFunctionality";

function App() {
  const [currentWeatherCode, setCurrentWeatherCode] = useState();

  function getWeatherCode(weatherCode) {
    setCurrentWeatherCode(weatherCode);
  }

  return (
    <Background currentWeatherCode={currentWeatherCode}>
      <NavBar />
      <TimeDateContainer>
        <TimeDate />
      </TimeDateContainer>
      <SearchFunctionality getWeatherCode={getWeatherCode} />
    </Background>
  );
}

export default App;
