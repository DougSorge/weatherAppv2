import React, { useState } from "react";
import Card from "../Card";
import UserInput from "../../UserInput/UserInput";
import style from "./SearchFunctionality.module.css";

export default function SearchFunctionality(props) {
  const [searchResults, setSearchResults] = useState();
  function getDataFromInput(data) {
    setSearchResults(data);
  }
  console.log(searchResults);

  if (!searchResults) {
    return <UserInput getResults={getDataFromInput} />;
  } else {
    return (
      <>
        <div className={style.resultsContainer}>
          <Card searchResults={searchResults} />
        </div>
        <UserInput getResults={getDataFromInput} />
      </>
    );
  }
}
