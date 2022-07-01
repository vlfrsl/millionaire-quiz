import React from "react";
import { useSelector } from "react-redux";

import { TryAgainButton } from "./tryAgainButton";
import { selectWinSum } from "../slices/processSlice";

export function FinalScreen() {
  const winSum = useSelector(selectWinSum);

  return (
    <div className="options-wrapper">
      <div className="arm-img">
        <img src="/images/start_screen_arm.svg" alt="" />
      </div>

      <div className="options-container">
        <div className="options-text">
          <div>Total score:</div>
          <div>${winSum} earned</div>
        </div>

        <TryAgainButton />
      </div>
    </div>
  );
}
