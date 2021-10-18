import React from "react";
import Background from "./Components/UI/Background";

import NavBar from "./Components/NavBar/NavBar";
import TimeDateContainer from "./Components/TimeDateDisplay/TimeDateContainer";
import TimeDate from "./Components/TimeDateDisplay/TimeDate";
import "./App.css";
import SearchFunctionality from "./Components/SearchFunctionality/SearchFunctionality";

function App() {
  return (
    <Background>
      <NavBar />
      <TimeDateContainer>
        <TimeDate />
      </TimeDateContainer>
      <SearchFunctionality />
    </Background>
  );
}

export default App;
