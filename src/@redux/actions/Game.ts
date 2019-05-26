import { ADVANCE_TO_NEXT_YEAR, FOOD, GOLD, WOOD } from "../constants/Game";

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

const addWood = (payload: number) => ({
  type: WOOD.ADD,
  payload,
});

const removeWood = (payload: number) => ({
  type: WOOD.DEPLETE,
  payload,
});

const addFood = (payload: number) => ({
  type: FOOD.ADD,
  payload,
});

const removeFood = (payload: number) => ({
  type: FOOD.DEPLETE,
  payload,
});

const advanceToNextYear = () => ({
  type: ADVANCE_TO_NEXT_YEAR,
});

export {
  addGold,
  removeGold,
  addFood,
  removeFood,
  addWood,
  removeWood,
  advanceToNextYear,
};
