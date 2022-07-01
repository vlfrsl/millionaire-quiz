import { combineReducers } from "redux";

import { optionsSlice } from "./slices/optionsSlice";
import { processSlice } from "./slices/processSlice";

const rootReducer = combineReducers({
  options: optionsSlice,
  process: processSlice,
});

export default rootReducer;
