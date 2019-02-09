interface AppState {
  playerName: string
  difficulty: number
  currentYear: number
  gold: number
  fields: number
  food: number
  barracks: number
  soldiers: number
  houses: number
  citizen: number
  research: number
  divinity: number
}

interface AppProps {}

export { AppState, AppProps }
