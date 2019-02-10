interface BuildModalProps {
  buildModalOpen: boolean;
  closeModal: () => any;
  handleBuild: (
    options: {
      tileId: string;
      action: string;
      buildingType: string;
    },
  ) => any;
  gold: number;
  food: number;
  wood: number;
  /**
   * `currentTileId` is the Tile from
   * which the modal was opened and the Tile
   * we'll be building on
   */
  currentTileId: string;
}

interface BuildModalState {
  selectedOption: any;
}

/**
 * HELPER FUNCTIONS
 */

interface filterOptionsBasedOnCostTypes {
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

export { BuildModalProps, BuildModalState, filterOptionsBasedOnCostTypes };
