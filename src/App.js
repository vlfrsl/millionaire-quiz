import "./App.scss";
import { QuestionCategories } from "./components/options";
import { Question } from "./components/question.js";
import { useSelector } from "react-redux";
import { FinalScreen } from "./components/finalScreen";
import { selectFetchFailed } from "./slices/optionsSlice";
import {
  selectIndex,
  selectQuestions,
  selectOnGoing,
} from "./slices/processSlice";
import { FailScreen } from "./components/failScreen";

function App() {
  const questions = useSelector(selectQuestions);
  const questionIndex = useSelector(selectIndex);
  const onGoing = useSelector(selectOnGoing);
  const fetchFailed = useSelector(selectFetchFailed);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  }
  if (!questions.length) {
    component = <QuestionCategories />;
  }
  if (onGoing === false) {
    component = <FinalScreen />;
  }
  if (fetchFailed) {
    component = <FailScreen />;
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  );
}

export default App;
