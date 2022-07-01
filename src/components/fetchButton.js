import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../slices/optionsSlice";
import { selectStatus } from "../slices/processSlice";

export function FetchButton() {
  const dispatch = useDispatch();

  const handleQuery = () => dispatch(fetchQuestions);

  const status = useSelector(selectStatus);

  if (status === "loading") {
    return (
      <div className="fetch-btn">
        <button disabled="disabled">Loading...</button>
      </div>
    );
  }

  return (
    <div className="fetch-btn">
      <button onClick={handleQuery}>Start</button>
    </div>
  );
}
