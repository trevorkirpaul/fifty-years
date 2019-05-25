import { PLAYER_NAME, START_GAME } from "../constants/Player";

export interface playerActionTypes {
  type: string;
  payload: string;
}

const setPlayerName = (payload: string) => ({
  type: PLAYER_NAME.SET,
  payload,
});

const startGame = (payload: { playerName: string; playerId: string }) => ({
  type: START_GAME,
  payload,
});

export { setPlayerName, startGame };
