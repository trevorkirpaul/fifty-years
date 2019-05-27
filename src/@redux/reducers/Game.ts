import { gameActionTypes } from "../actions/Game";

import * as GAME_CONSTANTS from "../constants/Game";

export interface gameReducerTypes {
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
   * type `house`. These buildings limit the number of `citizens`
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
}

const initialState: gameReducerTypes = {
  difficulty: 0,
  currentYear: 0,
  gold: 100,
  food: 100,
  wood: 100,
  research: 0,
  divinity: 0,
  fields: 0,
  barracks: 0,
  logHouses: 0,
  houses: 0,
  soldiers: 0,
  citizens: 0,
};

const gameReducer = (state = initialState, action: gameActionTypes) => {
  switch (action.type) {
    case GAME_CONSTANTS.ADVANCE_TO_NEXT_YEAR:
      return {
        ...state,
        currentYear: state.currentYear + 1,
      };

    case GAME_CONSTANTS.GOLD.DEPLETE:
      return {
        ...state,
        gold: state.gold - action.payload,
      };

    case GAME_CONSTANTS.FOOD.DEPLETE:
      return {
        ...state,
        food: state.food - action.payload,
      };

    case GAME_CONSTANTS.FOOD.ADD:
      return {
        ...state,
        food: state.food + action.payload,
      };

    case GAME_CONSTANTS.WOOD.DEPLETE:
      return {
        ...state,
        wood: state.wood - action.payload,
      };

    default:
      return state;
  }
};

export default gameReducer;
