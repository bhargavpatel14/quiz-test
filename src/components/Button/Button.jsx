import React from "react";

export default function Button({ back, isFirstStep, isLastStep, next }) {
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        gap: ".5rem",
        justifyContent: "flex-end",
      }}
    >
      {!isFirstStep && (
        <button type="button" onClick={back}>
          Back
        </button>
      )}
      <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
    </div>
  );
}
