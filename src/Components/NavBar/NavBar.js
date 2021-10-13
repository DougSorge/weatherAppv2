import React, { useState } from "react";
import UserInput from "../UserInput/UserInput";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  const [searchVisible, setSearchVisible] = useState(false);
  let toggleSearch = (searchstate) => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <span>SorgeForge Weather</span>
        <div>
          <i
            className="fas fa-search-location"
            onClick={() => {
              toggleSearch();
            }}
          ></i>
          <button type="button">Sign In</button>
          <button type="button">Sign Up</button>
        </div>
      </nav>
      <UserInput status={searchVisible} />
    </>
  );
}
