import { PLAYER_NAME } from "../constants/Player";

const setPlayerName = (payload: string) => ({
  type: PLAYER_NAME.SET,
  payload,
});

export { setPlayerName };
