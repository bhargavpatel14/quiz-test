import QuizPage from "./components/QuizPage";
import { useMultistep } from "./Hooks/useMultiStep";
import Button from "./components/Button";
import { cssQuestions } from "./quizQuestions";

import "./App.css";

function App() {
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultistep([
      ...cssQuestions.map((question) => {
        return (
          <QuizPage question={question.question} options={question.options} />
        );
      }),
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
