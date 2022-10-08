import React from "react";
import styles from "./Quizpage.module.css";

export default function QuizPage({ question, options, children }) {
  return (
    <>
      <div className={styles.quizpage}>
        <div className={styles.quizQuestion}>{question}</div>
        <div className={styles.options}>
          {options.map((option) => {
            return (
              <>
                <div className={styles.quizOption}> {option}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
