import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: [
      {
        id: 1,
        title: "General Knowledge",
        description: "Test your general knowledge!",
        questions: [
          {
            id: 1,
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correctAnswer: "Paris",
          },
          {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: "Mars",
          },
          {
            id: 3,
            question: "Who painted the Mona Lisa?",
            options: [
              "Vincent van Gogh",
              "Leonardo da Vinci",
              "Pablo Picasso",
              "Claude Monet",
            ],
            correctAnswer: "Leonardo da Vinci",
          },
        ],
      },
      {
        id: 2,
        title: "Mathematics",
        description: "Test your math skills!",
        questions: [
          {
            id: 1,
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
          },
          {
            id: 2,
            question: "What is the square root of 16?",
            options: ["2", "4", "6", "8"],
            correctAnswer: "4",
          },
          {
            id: 3,
            question: "What is 3 x 7?",
            options: ["18", "21", "24", "27"],
            correctAnswer: "21",
          },
        ],
      },
    ],
    currentQuiz: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    score: 0,
    selectedAnswer: null,
  },
  reducers: {
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
      state.currentQuestionIndex = 0;
      state.userAnswers = new Array(action.payload.questions.length).fill(null);
      state.score = 0;
      state.selectedAnswer = null;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    submitAnswer: (state) => {
      if (state.selectedAnswer !== null) {
        state.userAnswers[state.currentQuestionIndex] = state.selectedAnswer;
        if (
          state.selectedAnswer ===
          state.currentQuiz.questions[state.currentQuestionIndex].correctAnswer
        ) {
          state.score += 1;
        }
      }
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex < state.currentQuiz.questions.length - 1) {
        state.currentQuestionIndex += 1;
        state.selectedAnswer =
          state.userAnswers[state.currentQuestionIndex] || null;
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        state.selectedAnswer =
          state.userAnswers[state.currentQuestionIndex] || null;
      }
    },
    resetQuiz: (state) => {
      state.currentQuiz = null;
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.score = 0;
      state.selectedAnswer = null;
    },
  },
});

export const {
  setCurrentQuiz,
  setSelectedAnswer,
  submitAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
