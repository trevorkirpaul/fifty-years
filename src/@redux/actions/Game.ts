import { GOLD } from "../constants/Game";

const addGold = (payload: number) => ({
  type: GOLD.ADD,
  payload,
});

const removeGold = (payload: number) => ({
  type: GOLD.DEPLETE,
  payload,
});

export { addGold };
