import { tileActionTypes } from "../actions/types";
import { CREATE_GAME } from "../constants/Tile";
import { tileReducerTypes } from "./types";

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
