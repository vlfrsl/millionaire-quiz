export const ACTIONS_PROCESS = {
  setLoading() {
    return {
      type: "process/setLoading",
      payload: "loading",
    };
  },

  setQuestions(questions) {
    return {
      type: "process/setQuestions",
      payload: questions,
    };
  },

  stopQuiz() {
    return {
      type: "process/stopQuiz",
      payload: false,
    };
  },

  setScore(score) {
    return {
      type: "process/setScore",
      payload: score + 1,
    };
  },

  setIndex(index) {
    return {
      type: "process/setIndex",
      payload: index + 1,
    };
  },

  setDefaultSettings() {
    return {
      type: "process/setDefaults",
    };
  },
};
