import React, { useState } from "react";
import { cssQuestions, jsQuestions } from "./quizQuestions";
import Quiz from "./components/Quiz";
import Card from "./components/Card";
import styles from "./App.module.css";

function App() {
  const [quizTest, setQuizTest] = useState();

  return quizTest ? (
    <Quiz quizquestions={quizTest} />
  ) : (
    <div className={styles.cards}>
      <Card
        testName="CSS"
        onClick={() => {
          setQuizTest(cssQuestions);
        }}
      />
      <Card
        testName="JS"
        onClick={() => {
          setQuizTest(jsQuestions);
        }}
      />
    </div>
  );
}

export default App;
