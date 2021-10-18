import React, { useState } from "react";

import style from "./UserInput.module.css";

export default function UserInput(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.performSearch(searchTerm);
  };

  return (
    <form className={`${style.form} `} onSubmit={handleSubmit}>
      <input
        type="text"
        name="getData"
        id="searchBar"
        placeholder="Search By City Name"
        value={searchTerm}
        onChange={handleChange}
        required
      ></input>
    </form>
  );
}
