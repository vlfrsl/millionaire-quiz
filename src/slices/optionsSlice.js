import { URL } from "../constants/constants";
import { ACTIONS_PROCESS } from "../actions/actionsProcess";
import { ACTIONS_OPTIONS } from "../actions/actionsOptions";

const initialState = {
  categories: [],
  categorySelectedId: 0,
  difficultySelected: "all",
  status: "loading",
  fetchFailed: false,
};

export const optionsSelector = (state) => state.options;
export const selectFetchFailed = (state) => state.options.fetchFailed;

export function optionsSlice(state = initialState, action) {
  switch (action.type) {
    case "options/loaded": {
      return {
        ...state,
        categories: action.payload,
        status: "loaded",
      };
    }

    case "options/difficultySelected": {
      return {
        ...state,
        difficultySelected: action.payload,
      };
    }

    case "options/categorySelected": {
      return {
        ...state,
        categorySelectedId: action.payload,
      };
    }

    case "options/setFetchFailed": {
      return {
        ...state,
        fetchFailed: true,
      };
    }

    default:
      return state;
  }
}

export async function fetchCategories(dispatch) {
  const apiUrl = URL.categories;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      dispatch(ACTIONS_OPTIONS.categoriesLoaded(response.trivia_categories));
    })
    .catch(() => dispatch(ACTIONS_OPTIONS.setFetchFailed()));
}

export async function fetchQuestions(dispatch, getState) {
  const state = getState();

  let apiUrl = URL.questions;

  if (state.options.categorySelectedId.length > 0) {
    apiUrl.concat(`&category=${state.options.categorySelectedId}`);
  }

  if (state.options.difficultySelected !== "all") {
    apiUrl = apiUrl.concat(`&difficulty=${state.options.difficultySelected}`);
  }
  dispatch(ACTIONS_PROCESS.setLoading());

  await fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      console.log("here");
      console.log(response);
      dispatch(ACTIONS_PROCESS.setQuestions(response.results));
      console.log(state);
    })
    .catch(() => dispatch(ACTIONS_OPTIONS.setFetchFailed()));
}
