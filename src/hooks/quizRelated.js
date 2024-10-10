import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentQuiz,
  setSelectedAnswer,
  submitAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  resetQuiz
} from '@/reducer';

export const useQuiz = () => {
  const dispatch = useDispatch();
  const {
    quizzes,
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    score,
    selectedAnswer
  } = useSelector(state => state.quiz);

  const startQuiz = (quizId) => {
    const quiz = quizzes.find(q => q.id === quizId);
    dispatch(setCurrentQuiz(quiz));
  };

  const selectAnswer = (answer) => {
    dispatch(setSelectedAnswer(answer));
  };

  const submitCurrentAnswer = () => {
    dispatch(submitAnswer());
  };

  const nextQuestion = () => {
    dispatch(goToNextQuestion());
  };

  const previousQuestion = () => {
    dispatch(goToPreviousQuestion());
  };

  const endQuiz = () => {
    dispatch(resetQuiz());
  };

  return {
    quizzes,
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    score,
    selectedAnswer,
    startQuiz,
    selectAnswer,
    submitCurrentAnswer,
    nextQuestion,
    previousQuestion,
    endQuiz
  };
};