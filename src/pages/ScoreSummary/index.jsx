import { Container } from "@/components";
import { useQuiz } from "@/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ScoreSummary = () => {
  const { currentQuiz, score, userAnswers, endQuiz } = useQuiz();
  const navigate = useNavigate();

  if (!currentQuiz) {
    navigate("/");
    return null;
  }

  const handleReturnHome = () => {
    endQuiz();
    navigate("/");
  };

  return (
    <Container>
      <h2 className="mb-4">Quiz Results</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            Your Score: {score} / {currentQuiz.questions.length}
          </h5>
          <p className="card-text">
            Percentage:{" "}
            {((score / currentQuiz.questions.length) * 100).toFixed(2)}%
          </p>
        </div>
      </div>
      <h3 className="mb-3">Answers:</h3>
      {currentQuiz.questions.map((question, index) => (
        <div key={question.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Question {index + 1}</h5>
            <p className="card-text">{question.question}</p>
            <p className="card-text">
              Your Answer: <strong>{userAnswers[index]}</strong>
            </p>
            <p className="card-text">
              Correct Answer: <strong>{question.correctAnswer}</strong>
            </p>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleReturnHome}>
        Return to Quiz List
      </button>
    </Container>
  );
};
