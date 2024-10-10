import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/hooks";
import { Container } from "@/components";

export const QuizPage = () => {
  const {
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    selectedAnswer,
    selectAnswer,
    submitCurrentAnswer,
    nextQuestion,
    previousQuestion,
  } = useQuiz();
  const navigate = useNavigate();

  if (!currentQuiz) {
    navigate("/");
    return null;
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const isLastQuestion =
    currentQuestionIndex === currentQuiz.questions.length - 1;

  const handleSelectAnswer = (answer) => {
    selectAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      submitCurrentAnswer();
      if (isLastQuestion) {
        navigate("/score");
      } else {
        nextQuestion();
      }
    }
  };

  const handlePreviousQuestion = () => {
    previousQuestion();
  };

  return (
    <Container>
      <h2 className="mb-4">{currentQuiz.title}</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            Question {currentQuestionIndex + 1} of{" "}
            {currentQuiz.questions.length}
          </h5>
          <p className="card-text">{currentQuestion.question}</p>
          <div className="d-grid gap-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`btn ${
                  selectedAnswer === option
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleSelectAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          {isLastQuestion ? "Finish Quiz" : "Next"}
        </button>
      </div>
      <div className="mt-3">
        <h6>Progress:</h6>
        {currentQuiz.questions.map((_, index) => (
          <span
            key={index}
            className={`badge ${
              index === currentQuestionIndex
                ? "bg-primary"
                : userAnswers[index]
                ? "bg-success"
                : "bg-secondary"
            } me-2`}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </Container>
  );
};
