import React from "react";
import styles from "./Button.module.css";

export default function Button({ back, isFirstStep, isLastStep, next }) {
  return (
    <div className={styles.buttonContainer}>
      {!isFirstStep && (
        <button className={styles.button} type="button" onClick={back}>
          Back
        </button>
      )}
      <button className={styles.button} type="submit">
        {isLastStep ? "Finish" : "Next"}
      </button>
    </div>
  );
}
