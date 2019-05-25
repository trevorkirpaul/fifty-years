export interface filterOptionsBasedOnCostTypes {
  /**
   * options which will populate the `Select` menu
   * which includes the cost of the option
   */
  options: Array<{
    value: string;
    label: string;
    goldCost: number;
    foodCost: number;
    woodCost: number;
  }>;
  /**
   * resources which the player currently has
   */
  playerResources: {
    gold: number;
    food: number;
    wood: number;
  };
}

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
