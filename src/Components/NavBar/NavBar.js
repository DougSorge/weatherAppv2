import React from "react";

import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <>
      <nav className={styles.navbar}>
        <span>SorgeForge Weather</span>
        <div>
          <button type="button">Sign In</button>
          <button type="button">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
