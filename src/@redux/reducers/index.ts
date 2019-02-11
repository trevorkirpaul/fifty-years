import { combineReducers } from "redux";

import gameReducer from "./Game";
import playerReducer from "./Player";
import tileReducer from "./Tile";

import { storeState } from "./types";

const rootReducer = combineReducers<storeState>({
  PLAYER: playerReducer,
  GAME: gameReducer,
  TILE: tileReducer,
});

export default rootReducer;
