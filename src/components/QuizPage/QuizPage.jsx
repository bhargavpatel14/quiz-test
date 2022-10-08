import React from "react";
import { useMultistep } from "../../Hooks/useMultiStep";
import Button from "../Button";

export default function QuizPage() {
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultistep([<div>One</div>, <div>Two</div>, <div>Three</div>]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <Button
          next={next}
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
          back={back}
        />
      </form>
    </>
  );
}
