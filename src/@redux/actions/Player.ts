import { PLAYER_NAME, START_GAME } from "../constants/Player";

const setPlayerName = (payload: string) => ({
  type: PLAYER_NAME.SET,
  payload,
});

const startGame = (payload: { playerName: string; playerId: string }) => ({
  type: START_GAME,
  payload,
});

export { setPlayerName, startGame };
