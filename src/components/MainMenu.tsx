import * as React from 'react'

interface MainMenuProps {
  playerName: string
  difficulty: number
  handleStartGame: ({
    playerName,
    difficulty,
  }: {
    playerName: string
    difficulty: number
  }) => void
}

interface MainMenuState {
  playerName: string
  difficulty: number
}

class MainMenu extends React.Component<MainMenuProps, MainMenuState> {
  constructor(props: MainMenuProps) {
    super(props)

    this.state = {
      playerName: '',
      difficulty: 0,
    }
  }

  handleOnChangePlayerName = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    return this.setState(() => ({ playerName: value }))
  }

  handleStartGame = () => {
    const { playerName, difficulty } = this.state
    const { handleStartGame } = this.props

    if (!playerName) {
      return null
    }

    return handleStartGame({ playerName, difficulty })
  }

  render() {
    const { playerName } = this.state
    return (
      <div>
        <input
          type="text"
          name="playerName"
          value={playerName}
          onChange={this.handleOnChangePlayerName}
        />
        <button onClick={this.handleStartGame}>Start</button>
      </div>
    )
  }
}

export default MainMenu
