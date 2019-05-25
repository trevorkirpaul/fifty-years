import { storeState } from "../reducers";

const tile = (state: storeState) => state.TILE;
const player = (state: storeState) => state.PLAYER;
const game = (state: storeState) => state.GAME;

export { tile, player, game };
