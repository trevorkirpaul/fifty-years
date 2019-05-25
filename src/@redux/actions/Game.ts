import { GOLD } from "../constants/Game";

export interface gameActionTypes {
  type: string;
  payload: number;
}

const addGold = (payload: number) => ({
  type: GOLD.ADD,
  payload,
});

const removeGold = (payload: number) => ({
  type: GOLD.DEPLETE,
  payload,
});

export { addGold, removeGold };
