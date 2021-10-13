import React from "react";
import Background from "./Components/UI/Background";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import TimeDateContainer from "./Components/TimeDateDisplay/TimeDateContainer";
import TimeDate from "./Components/TimeDateDisplay/TimeDate";

function App() {
  return (
    <>
      <Background />
      <NavBar />
      <TimeDateContainer>
        <TimeDate />
      </TimeDateContainer>
    </>
  );
}

export default App;
