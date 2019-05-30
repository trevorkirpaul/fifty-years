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

/**
 * **renderCalculatedResource** is a function which
 * helps us render the given resource with or without
 * the price of the building
 *
 * When `showResourcesAfterBuying` is true, we'll
 * show the `resource` with the `cost` reduced
 *
 * @param showResourcesAfterBuying
 * @param resource
 * @param cost
 */
const renderCalculatedResource = (
  showResourcesAfterBuying: boolean,
  resource: number,
  cost: number = 0,
) => (showResourcesAfterBuying ? resource - cost : resource);

export { filterOptionsBasedOnCost, renderCalculatedResource };
