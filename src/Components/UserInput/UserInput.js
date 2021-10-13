import React from "react";

import style from "./UserInput.module.css";

export default function UserInput(props) {
  return (
    <form className={`${style.form}  ${props.status ? style.visible : ""}`}>
      <input
        type="text"
        name="getData"
        id="searchBar"
        placeholder="Search By City or ZipCode"
        required
      ></input>
    </form>
  );
}
