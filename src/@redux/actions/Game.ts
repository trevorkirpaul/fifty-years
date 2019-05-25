import { ADVANCE_TO_NEXT_YEAR, GOLD } from "../constants/Game";

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

const advanceToNextYear = () => ({
  type: ADVANCE_TO_NEXT_YEAR,
});

export { addGold, removeGold, advanceToNextYear };
