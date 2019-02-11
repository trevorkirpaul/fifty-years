import { combineReducers } from "redux";

import { NAME as playerName } from "../constants/Player";
import playerReducer from "./Player";

import { storeState } from "./types";

const rootReducer = combineReducers<storeState>({
  [playerName]: playerReducer,
});

export default rootReducer;
