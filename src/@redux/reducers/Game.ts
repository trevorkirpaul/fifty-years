import { gameActionTypes } from "../actions/types";
import { GOLD } from "../constants/Game";
import { gameReducerTypes } from "./types";

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
    // case GOLD.ADD:
    //   return {
    //     ...state,
    //     gold: state.gold + action.payload,
    //   };

    default:
      return state;
  }
};

export default gameReducer;
