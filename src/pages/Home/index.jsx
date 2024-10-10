import { Container } from "@/components";
import { useQuiz } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { quizzes, startQuiz } = useQuiz();
  const navigate = useNavigate();

  const handleStartQuiz = (quizId) => {
    startQuiz(quizId);
    navigate("/quiz");
  };

  return (
    <Container>
      <h2 className="mb-4">Available Quizzes</h2>
      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text">{quiz.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleStartQuiz(quiz.id)}
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
