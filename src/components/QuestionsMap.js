import React from "react";
import { useSelector } from "react-redux";
import { STEPS } from "../constants/steps";
import { selectsScore } from "../slices/processSlice";

export function QuestionsMap() {
  const score = useSelector(selectsScore);
  let stepsReversed = STEPS.slice().reverse();

  let imageUrl = "images/option_image.svg";

  // функция принимает ID, который равен номеру нынешнего вопроса
  //относительно этого и елемент получает статус (и определенные стили)
  //'нынешний', 'пройдено' или 'не пройдено'
  const setStepStatus = (stepId) => {
    let defaultClassName = "step";

    if (score < stepId) {
      imageUrl = "images/option_image.svg";

      return defaultClassName;
    }
    if (stepId === score) {
      defaultClassName += " current ";
      imageUrl = "images/option_image_active.svg";
      return defaultClassName;
    }
    if (score > stepId) {
      defaultClassName += " done ";
      imageUrl = "images/option_image.svg";
      return defaultClassName;
    }
  };

  return (
    <>
      {stepsReversed.map((step, index) => (
        <div key={index} className={setStepStatus(step.id)}>
          <img src={imageUrl} alt="" />
          <span className="step-value">${step.value}</span>
        </div>
      ))}
    </>
  );
}
