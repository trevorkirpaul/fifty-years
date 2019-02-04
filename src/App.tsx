import * as React from 'react'

import MainMenu from './components/MainMenu'

/**
 * Types
 */

interface AppProps {}

interface AppState {
  playerName: string
  difficulty: number
  currentYear: number
  gold: number
  fields: number
  food: number
  barracks: number
  soldiers: number
  home: number
  citizen: number
}

interface handleStartGameProps {
  playerName: string
  difficulty: number
}

/**
 * Component
 */

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      playerName: '',
      difficulty: 0,
      currentYear: 0,
      gold: 0,
      fields: 0,
      food: 0,
      barracks: 0,
      soldiers: 0,
      home: 0,
      citizen: 0,
    }
  }

  handleStartGame = ({ playerName, difficulty }: handleStartGameProps) => {
    return console.log('STARTING GAME', { playerName, difficulty })
  }

  render() {
    const { playerName, difficulty } = this.state

    if (!playerName) {
      return (
        <MainMenu
          playerName={playerName}
          difficulty={difficulty}
          handleStartGame={this.handleStartGame}
        />
      )
    }
  }
}

export default App
