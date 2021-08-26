import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import calcReducer from "./calcReducer";

const reducers = combineReducers({
  theme: themeReducer,
  calc: calcReducer
});

export default reducers;