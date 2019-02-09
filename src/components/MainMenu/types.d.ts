interface MainMenuProps {
  playerName: string;
  difficulty: number;
  handleStartGame: (
    {
      playerName,
      difficulty,
    }: {
      playerName: string
      difficulty: number,
    },
  ) => void;
}

interface MainMenuState {
  playerName: string;
  difficulty: number;
}

export { MainMenuProps, MainMenuState };
