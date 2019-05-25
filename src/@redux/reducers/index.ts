import { combineReducers } from "redux";

import gameReducer, { gameReducerTypes } from "./Game";
import playerReducer, { playerReducerTypes } from "./Player";
import tileReducer, { tileReducerTypes } from "./Tile";

export interface storeState {
  PLAYER: playerReducerTypes;
  GAME: gameReducerTypes;
  TILE: tileReducerTypes;
}

const rootReducer = combineReducers<storeState>({
  PLAYER: playerReducer,
  GAME: gameReducer,
  TILE: tileReducer,
});

export default rootReducer;
