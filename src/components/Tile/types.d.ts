interface TileProps {
  type: string;
  id: string;
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

export { TileProps };
