import React, { useState } from "react";
import QuizPage from "../QuizPage";
import { useMultistep } from "../../Hooks/useMultiStep";
import Button from "../Button";

export default function Quiz({ quizquestions }) {
  const [data, setData] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultistep([
      ...quizquestions.map((question) => {
        return (
          <QuizPage
            question={question.question}
            options={question.options}
            id={question.id}
            {...data}
            updateFields={updateFields}
          />
        );
      }),
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(`Score ${calculateScore()}%`);
  }

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function calculateScore() {
    let correctans = 0;
    for (let i = 1; i <= quizquestions.length; i++) {
      if (quizquestions[i - 1].correctAnsert === data[i]) {
        correctans = correctans + 1;
      }
    }
    return (correctans / quizquestions.length) * 100;
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              top: ".5rem",
              right: "10rem",
            }}
          >
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
      </div>
    </>
  );
}
