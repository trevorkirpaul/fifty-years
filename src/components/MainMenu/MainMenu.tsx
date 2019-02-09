import * as React from "react";
import uuid from "uuid";

import Button from "../Button";

import { MainMenuProps, MainMenuState } from "./types";

class MainMenu extends React.Component<MainMenuProps, MainMenuState> {
  constructor(props: MainMenuProps) {
    super(props);

    this.state = {
      playerName: "",
      playerId: "",
      difficulty: 0,
    };
  }

  public handleOnChangePlayerName = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    return this.setState(() => ({ playerName: value }));
  }

  public generatePlayerId = () => {
    return this.setState({ playerId: uuid() });
  }

  public handleStartGame = () => {
    const { playerName, playerId, difficulty } = this.state;
    const { handleStartGame } = this.props;

    if (!playerName) {
      return null;
    }

    return handleStartGame({ playerName, playerId, difficulty });
  }

  public render() {
    const { playerName, playerId } = this.state;
    return (
      <div>
        <input
          type="text"
          name="playerName"
          value={playerName}
          onChange={this.handleOnChangePlayerName}
        />
        <Button
          onClick={this.generatePlayerId}
          disabled={!!playerId}
          loading={false}
        >
          Generate Player ID
        </Button>
        <Button onClick={this.handleStartGame} disabled={false} loading={false}>
          Start
        </Button>
      </div>
    );
  }
}

export default MainMenu;
