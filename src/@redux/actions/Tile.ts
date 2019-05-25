import { CREATE_GAME } from "../constants/Tile";

export interface tileActionTypes {
  type: string;
  payload?: string | number;
}

const createGame = () => ({
  type: CREATE_GAME,
});

export { createGame };
