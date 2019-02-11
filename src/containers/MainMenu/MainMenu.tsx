import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import * as playerActions from "../../@redux/actions/Player";
import { storeState } from "../../@redux/reducers/types";
import { player as playerSelector } from "../../@redux/selectors";

import Button from "../../components/Button";
import Field from "../../components/Field";

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
    const { playerName, playerId } = this.state;
    const {
      actions: {
        player: { startGame },
      },
    } = this.props;
    if (!playerName) {
      return null;
    }

    return startGame({ playerName, playerId });
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

const mapState = (state: storeState) => ({
  data: {
    player: playerSelector(state),
  },
});

const mapDispatch = (dispatch: any) => ({
  actions: {
    player: bindActionCreators(playerActions, dispatch),
  },
});

export default connect(
  mapState,
  mapDispatch,
)(MainMenu);
