import React from "react";
import styles from "./TimeDateContainer.module.css";

export default function TimeDateContainer(props) {
  return <div className={styles.timeDateContainer}>{props.children}</div>;
}
