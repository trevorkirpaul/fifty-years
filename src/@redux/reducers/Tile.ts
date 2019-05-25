import { tileActionTypes } from "../actions/Tile";
import { CREATE_GAME } from "../constants/Tile";

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
      id: "1",
    },
  ],
};

const tileReducer = (state = initialState, action: tileActionTypes) => {
  switch (action.type) {
    case CREATE_GAME:
      return {
        tiles: [
          {
            type: "empty",
            id: "1",
          },
          {
            type: "empty",
            id: "2",
          },
          {
            type: "empty",
            id: "3",
          },
          {
            type: "empty",
            id: "4",
          },
          {
            type: "empty",
            id: "5",
          },
          {
            type: "empty",
            id: "6",
          },

          {
            type: "empty",
            id: "7",
          },
          {
            type: "empty",
            id: "8",
          },
          {
            type: "empty",
            id: "9",
          },
        ],
      };
    default:
      return state;
  }
};

export default tileReducer;
