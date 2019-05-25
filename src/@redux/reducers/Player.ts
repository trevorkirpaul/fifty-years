import { PLAYER_NAME, START_GAME } from "../constants/Player";

export interface playerReducerTypes {
  playerName: string;
  playerId: string;
}

const initialState: playerReducerTypes = {
  playerName: "Trevor",
  playerId: "fsdfsdf",
};

const PlayerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        playerName: action.payload.playerName,
        playerId: action.payload.playerId,
      };

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
