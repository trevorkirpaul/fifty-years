import { PLAYER_NAME } from "../constants/Player";

import { playerActionTypes } from "../actions/types";
import { playerReducerTypes } from "./types";

const initialState: playerReducerTypes = {
  playerName: "",
  playerId: "",
};

const PlayerReducer = (state = initialState, action: playerActionTypes) => {
  switch (action.type) {
    case PLAYER_NAME.SET:
      return {
        ...state,
        playerName: action.payload,
      };

    default:
      return state;
  }
};

export default PlayerReducer;
