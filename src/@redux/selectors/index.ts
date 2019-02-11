import { start } from "repl";
import { storeState } from "../reducers/types";

const tile = (state: storeState) => state.TILE;
const player = (state: storeState) => state.PLAYER;
const game = (state: storeState) => state.GAME;

export { tile, player, game };
