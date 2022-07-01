import React from "react";
import { useDispatch } from "react-redux";
import { ACTIONS_PROCESS } from "../actions/actionsProcess";

export function TryAgainButton() {
  const dispatch = useDispatch();

  const setDefaults = () => {
    dispatch(ACTIONS_PROCESS.setDefaultSettings());
  };

  return (
    <div className="try-again-btn">
      <button onClick={setDefaults}>Try again</button>
    </div>
  );
}
