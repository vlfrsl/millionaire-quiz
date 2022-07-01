import { ACTIONS_PROCESS } from "../actions/actionsProcess";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QuestionsMap } from "./QuestionsMap";
import { formatQuestion } from "../helpers/formatQuestion";
import {
  selectIndex,
  selectQuestions,
  selectsScore,
  selectStatus,
} from "../slices/processSlice";

export function Question() {
  const dispatch = useDispatch();

  // стейт хранит информацию о том, был ли вообще выбран вариант ответа
  const [answerSelected, setAnswerSelected] = useState(false);
  // стейт хранит информацию о том, какой конкретно вариант выбран
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [answers, setAnswers] = useState([]);

  const questions = useSelector(selectQuestions);
  const index = useSelector(selectIndex);
  const score = useSelector(selectsScore);
  const status = useSelector(selectStatus);

  const question = questions[index];

  const formatedQuestion = formatQuestion(question.question);

  console.log("Right answer", question.correct_answer);

  // при каждом рендере ответы перемешиваются
  useEffect(() => {
    let answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort(() => Math.random() - 0.5);
    setAnswers(answers);
  }, [question]);

  // функция проверяет выбран ли ответ, если да,
  // то определяет какой именно статус присвоить ответу и придает
  // определенное стилевое оформление "выбраный вариант", "правильный", "неправильный"
  const setAnswerStatus = (item) => {
    if (!answerSelected) {
      // если ещё небыло выбрано варианта ответа,
      // то стилевое оформление - дефолтное
      return "images/option_image.svg";
    } else if (item === question.correct_answer) {
      return "images/option_image_correct.svg";
    } else if (item === selectedAnswer.textContent) {
      return "images/option_image_selected.svg";
    } else {
      return "images/option_image_incorrect.svg";
    }
  };

  const handleListItemClick = (event) => {
    setAnswerSelected(true);
    setSelectedAnswer(event.target);

    // если клик был произведен по правильному ответу или
    // клик был произведен по блоку в котором этот ответ храниться
    // то счет увеличивается
    if (
      event.target.textContent === question.correct_answer ||
      event.target.parentNode.textContent === question.correct_answer
    ) {
      dispatch(ACTIONS_PROCESS.setScore(score));
    } else {
      setTimeout(() => {
        dispatch(ACTIONS_PROCESS.stopQuiz());
      }, 1000);
    }

    // проверка есть ли следующий вопрос
    if (index + 1 < questions.length) {
      setTimeout(() => {
        setAnswerSelected(false);
        setSelectedAnswer(null);

        dispatch(ACTIONS_PROCESS.setIndex(index));
      }, 1000);
    } else {
      dispatch(ACTIONS_PROCESS.stopQuiz());
    }
  };

  // статус для блока с прогрессом (в мобильном формате)
  // меняет статус когда пользователь нажимает
  // на кнопку "показать прогресс"
  const [mapWindowStatus, setMapWindowStatus] = useState(
    "questions-map-wrapper"
  );
  const setQuestionsMapStatus = () => {
    if (mapWindowStatus.includes("active")) {
      setMapWindowStatus("questions-map-wrapper");
    } else {
      setMapWindowStatus("questions-map-wrapper active");
    }
  };

  if (status !== "loading") {
    return (
      <div className="quiz-wrapper">
        <div className="question-wrapper">
          <div className="open-map" onClick={setQuestionsMapStatus}>
            <img src="images/menu_btn.svg" alt="" />
          </div>

          <div className="question">
            <h2>{formatedQuestion}</h2>
          </div>

          <div className="answers-wrapper">
            {answers.map((answer, index) => (
              <div
                className="answer-button"
                key={index}
                onClick={handleListItemClick}
              >
                <img src={setAnswerStatus(answer)} alt="" />
                <div className="answer-text">{answer}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={mapWindowStatus}>
          <QuestionsMap />
        </div>
      </div>
    );
  }
}
