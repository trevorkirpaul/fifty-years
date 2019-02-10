interface LandProps {
  tiles: Array<{
    type: string;
    id: string;
  }>;
  /**
   * Function used to open the modal allowing player
   * to select build options such as
   * building types
   */
  handleOpenBuildModal: (id: string) => any;

  /**
   * Players current gold
   */
  gold: number;

  /**
   * Players current food
   */
  food: number;

  /**
   * Players current wood
   */
  wood: number;
}

interface LandState {}

export { LandProps, LandState };
