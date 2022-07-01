import { useDispatch, useSelector } from "react-redux";
import { FetchButton } from "./fetchButton";
import { optionsSelector } from "../slices/optionsSlice";
import { ACTIONS_OPTIONS } from "../actions/actionsOptions";

export function QuestionCategories() {
  const dispatch = useDispatch();

  let { categories, status, categorySelectedId, difficultySelected } =
    useSelector(optionsSelector);

  const setQuestionsCategory = (selectedCategory) => {
    dispatch(ACTIONS_OPTIONS.setCategory(selectedCategory));
  };

  const setQuestionDifficulty = (selectedDifficulty) => {
    dispatch(ACTIONS_OPTIONS.setDifficulty(selectedDifficulty));
  };

  const handleChangeCategory = (event) => {
    setQuestionsCategory(event.target.value);
  };

  const handleChangeDifficulty = (event) => {
    setQuestionDifficulty(event.target.value);
  };

  let selectCategory = undefined;
  if (categorySelectedId !== -1) {
    selectCategory = categorySelectedId;
  }

  let selectedDifficulty = undefined;
  if (difficultySelected !== "all") {
    selectedDifficulty = difficultySelected;
  }

  if (status === "loading") {
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  }

  return (
    <div className="options-wrapper">
      <div className="arm-img">
        <img src="/images/start_screen_arm.svg" alt="" />
      </div>

      <div className="options-container">
        <div className="options-text">
          <div>
            <h2>Who wants to be a millionaire?</h2>
          </div>
        </div>

        <ul className="options-list">
          <li>
            <h3>Categories</h3>
          </li>

          <li>
            <select
              onChange={handleChangeCategory}
              defaultValue={categorySelectedId}
            >
              <option value="-1" key="-1">
                All
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </li>

          <li>
            <h3>Difficulty</h3>
          </li>

          <li>
            <select
              onChange={handleChangeDifficulty}
              defaultValue={difficultySelected}
            >
              <option value="all" key="difficulty-0">
                All
              </option>
              <option value="easy" key="difficulty-1">
                Easy
              </option>
              <option value="medium" key="difficulty-2">
                Medium
              </option>
              <option value="hard" key="difficulty-3">
                Hard
              </option>
            </select>
          </li>
        </ul>

        <FetchButton />
      </div>
    </div>
  );
}
