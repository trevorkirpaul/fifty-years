import uuid from "uuid/v4";

import { tileActionTypes } from "../actions/Tile";
import * as TILE_CONSTANTS from "../constants/Tile";

export interface tileReducerTypes {
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
}

const initialState: tileReducerTypes = {
  tiles: [
    {
      type: "empty",
      id: uuid(),
    },
  ],
};

const tileReducer = (state = initialState, action: tileActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case TILE_CONSTANTS.BUILD:
      const tiles = state.tiles.map((t) => {
        if (t.id === payload.id) {
          return payload;
        }
        return t;
      });

      return {
        ...state,
        tiles,
      };
    default:
      return state;
  }
};

export default tileReducer;
