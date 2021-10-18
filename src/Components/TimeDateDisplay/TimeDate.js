import React, { useState } from "react";

import styles from "./TimeDate.module.css";

export default function TimeDate() {
  let currentDate = new Date();

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
  }, 60000);

  return (
    <>
      <p className={styles.time}>{date.date}</p>
      <p className={styles.date}>{date.time}</p>
    </>
  );
}
