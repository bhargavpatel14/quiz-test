import React from "react";
import styles from "./Card.module.css";

export default function Card({ testName, copy, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{testName}</div>
      <div className={styles.cardCopy}>{copy}</div>
      <div>
        <button onClick={onClick}>Get Started</button>
      </div>
    </div>
  );
}
