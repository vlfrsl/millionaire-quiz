export const ACTIONS_OPTIONS = {
  categoriesLoaded(categories) {
    return {
      type: "options/loaded",
      payload: categories,
    };
  },

  setCategory(selectedCategory) {
    return {
      type: "options/categorySelected",
      payload: selectedCategory,
    };
  },

  setDifficulty(selectedDifficulty) {
    return {
      type: "options/difficultySelected",
      payload: selectedDifficulty,
    };
  },

  setFetchFailed() {
    return {
      type: "options/setFetchFailed",
    };
  },
};
