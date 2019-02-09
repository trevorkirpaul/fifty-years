import * as React from "react";
import uuid from "uuid";

import Button from "../Button";
import Field from "../Field";

import { Title, Wrapper } from "./styles";
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
      <Wrapper>
        <Title>Fifty Years</Title>
        <Field
          type="text"
          name="playerName"
          value={playerName}
          onChange={this.handleOnChangePlayerName}
          placeholder="enter player name..."
          disabled={false}
        />

        <Field
          type="text"
          name="playerId"
          value={playerId}
          placeholder="..."
          disabled={true}
          onChange={() => {}}
        />

        <Button
          onClick={this.generatePlayerId}
          disabled={false}
          loading={false}
        >
          Generate Player ID
        </Button>
        <Button onClick={this.handleStartGame} disabled={false} loading={false}>
          Start
        </Button>
      </Wrapper>
    );
  }
}

export default MainMenu;
