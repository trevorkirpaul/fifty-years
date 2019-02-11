import { string } from "prop-types";
import { playerReducerTypes } from "../../@redux/reducers/types";

interface MainMenuProps {
  data: {
    player: playerReducerTypes;
  };

  actions: {
    player: {
      startGame: (
        { playerName, playerId }: { playerName: string; playerId: string },
      ) => any;
    };
  };
}

interface MainMenuState {
  playerName: string;
  playerId: string;
  difficulty: number;
}

export { MainMenuProps, MainMenuState };
