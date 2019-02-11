import { PLAYER_NAME } from "../constants/Player";

interface initialStateTypes {
  playerName: string;
  playerId: string;
}

interface actionTypes {
  type: string;
  payload: object | string;
}

const initialState: initialStateTypes = {
  playerName: "",
  playerId: "",
};

const PlayerReducer = (state = initialState, action: actionTypes) => {
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
