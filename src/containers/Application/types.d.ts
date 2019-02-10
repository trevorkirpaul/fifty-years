interface AppState {
  /**
   * `boolean` which will determine
   * whether or not the modal used when
   * building on an empty Tile is open
   */
  buildModalOpen: boolean;
  /**
   * `string` representing the current
   * player's name
   */
  playerName: string;
  /**
   * `string` representing the current
   * player's ID
   */
  playerId: string;
  /**
   * `number` which sets the difficulty
   * of the game
   */
  difficulty: number;
  /**
   * `number` representing the current year of the
   * game. Once this number reaches `50`, the game
   * has been completed
   */
  currentYear: number;
  /**
   * `number` representing the amount of gold the
   * player has. `gold` will be depleted when
   * the user purchases upgrades or buildings. This
   * value can not be negative
   */
  gold: number;
  /**
   * `number` representing the amount of `fields` the player
   * has built. a `field` is a building type and will generate
   * a certain amount of `food` per year of operation
   */
  fields: number;
  /**
   * `number` representing a value which is depleted
   * based on the number of `citizens` and
   * `soldiers` that reside in the player's `Lands`. If
   * this value reaches 0, the game is lost.
   */
  food: number;
  /**
   * `number` representing a building type which
   * produces `wood`. Requires `citizens` to produce `wood`
   */
  logHouses: number;
  /**
   * `number` representing a resource used for buildings
   */
  wood: number;
  /**
   * `number` of the building type `barracks` which limits the
   * number of soldiers which can reside in a `Land`
   */
  barracks: number;
  /**
   * `number` of units/residents with the type `soldier`
   */
  soldiers: number;
  /**
   * `number` representing the amount of buildings with the
   * type `house`. Thes buildings limit the number of `citizens`
   * which can reside in the player's Lands
   */
  houses: number;
  /**
   * `number` representing the unit type `citizen` which is limited
   * by the number of buildings with the type `house`. Each `citizen`
   * will deplete food but can be used for resource building
   */
  citizens: number;
  /**
   * `number` representing a value which will be used in the
   * future
   */
  research: number;
  /**
   * `number` representing a value which will be used in the
   * future
   */
  divinity: number;
  /**
   * `tiles` is an array of objects which represent spaces
   * in a `Land`. These objects can be "empty" and built upon.
   * When building, the player can choose to build barracks, houses,ect
   * if enough resources exists
   */
  tiles: Array<{
    type: string;
    id: string;
  }>;
  /**
   * When the modal is opened, `currentTileId`
   * will refer to the Tile from which the BuildModal was
   * opened
   */
  currentTileId: string;
}

interface AppProps {}

export { AppState, AppProps };
