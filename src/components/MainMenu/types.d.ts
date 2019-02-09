import { string } from "prop-types";

interface MainMenuProps {
  playerName: string;
  playerId: string;
  difficulty: number;
  handleStartGame: (
    { playerName: string, playerId: string, difficulty: number },
  ) => any;
}

interface MainMenuState {
  playerName: string;
  playerId: string;
  difficulty: number;
}

export { MainMenuProps, MainMenuState };
