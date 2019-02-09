import { filterOptionsBasedOnCostTypes } from "./types";

const filterOptionsBasedOnCost = ({
  options,
  playerResources,
}: filterOptionsBasedOnCostTypes) => {
  return options.filter((option) => {
    const hasEnoughGold = option.goldCost <= playerResources.gold;

    const hasEnoughFood = option.foodCost <= playerResources.food;

    const hasEnoughWood = option.woodCost <= playerResources.wood;

    if (hasEnoughFood && hasEnoughGold && hasEnoughWood) {
      return option;
    } else {
      return null;
    }
  });
};

export { filterOptionsBasedOnCost };
