import React from "react";
import { useMultistep } from "../../Hooks/useMultiStep";
import Button from "../Button";

export default function QuizPage() {
  const { steps, step, currentStepIndex, next, back } = useMultistep([
    <div>One</div>,
    <div>Two</div>,
  ]);

  return (
    <>
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
      </form>
      <Button next={next} back={back} />
    </>
  );
}
