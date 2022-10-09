import React, { useState } from "react";
import styles from "./Quizpage.module.css";

export default function QuizPage({ question, options, updateFields, id }) {
  const ans = `answer${id}`;
  return (
    <div className={styles.main}>
      <div className={styles.quizpage}>
        <div className={styles.quizQuestion}>{question}</div>
        <div className={styles.options}>
          {options.map((option) => {
            return (
              <div
                className={styles.quizOption}
                key={option}
                onClick={() => {
                  updateFields({ [id]: option });
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
