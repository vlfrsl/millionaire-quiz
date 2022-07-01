import { STEPS } from "../constants/steps";

export const selectQuestions = (state) => state.process.questions;
export const selectIndex = (state) => state.process.index;
export const selectsScore = (state) => state.process.score;
export const selectStatus = (state) => state.process.status;
export const selectWinSum = (state) => state.process.totalSum.value;
export const selectOnGoing = (state) => state.process.onGoing;

const initialState = {
  status: "",

  questions: [],
  index: 0,

  answers: [],
  rightAnswer: "",
  onGoing: true,

  score: 0,
  totalSum: { id: 0, value: 0 },
};

export function processSlice(state = initialState, action) {
  switch (action.type) {
    case "process/setLoading": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "process/setQuestions": {
      return {
        ...state,
        questions: action.payload,
        status: "loaded",
        onGoing: true,
      };
    }

    case "process/setScore": {
      return {
        ...state,
        score: action.payload,
        totalSum: STEPS[state.score],
      };
    }

    case "process/setIndex": {
      return {
        ...state,
        index: action.payload,
      };
    }

    case "process/stopQuiz": {
      return {
        ...state,
        onGoing: action.payload,
      };
    }

    case "process/setDefaults": {
      return {
        ...state,
        status: "",
        questions: [],
        index: 0,

        answers: [],
        rightAnswer: "",
        onGoing: true,

        score: 0,
        totalSum: { id: 0, value: 0 },
      };
    }
    default:
      return state;
  }
}
