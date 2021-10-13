import React, { useState } from "react";
import styles from "./TimeDate.module.css";

let currentDate = new Date();

export default function TimeDate() {
  const [date, setDate] = useState({
    time: currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: currentDate.toDateString().slice(3),
  });

  setInterval(() => {
    currentDate = new Date();
    setDate({
      time: currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: currentDate.toDateString().slice(3),
    });
  }, 45000);

  return (
    <>
      <p className={styles.time}>{date.date}</p>
      <p className={styles.date}>{date.time}</p>
    </>
  );
}
