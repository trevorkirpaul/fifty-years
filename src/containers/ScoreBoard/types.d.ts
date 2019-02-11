import {
  gameReducerTypes,
  playerReducerTypes,
} from "../../@redux/reducers/types";

interface ScoreBoardProps {
  data: {
    game: gameReducerTypes;
    player: playerReducerTypes;
  };
}

interface ScoreBoardState {}

export { ScoreBoardProps, ScoreBoardState };
