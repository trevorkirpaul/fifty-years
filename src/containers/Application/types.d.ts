interface AppState {
  playerName: string;
  playerId: string;
  difficulty: number;
  currentYear: number;
  gold: number;
  fields: number;
  food: number;
  barracks: number;
  soldiers: number;
  houses: number;
  citizens: number;
  research: number;
  divinity: number;
  tiles: Array<{
    type: string
    id: string,
  }>;
}

interface AppProps {}

export { AppState, AppProps };
