import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from "uuid";

import { storeState } from "@redux/reducers";
import { playerReducerTypes } from "@redux/reducers/Player";

import * as playerActions from "@redux/actions/Player";
import { player as playerSelector } from "@redux/selectors";
import Button from "components/Button";
import Field from "components/Field";

import { Title, Wrapper } from "./styles";

export interface MainMenuProps {
  data: {
    player: playerReducerTypes;
  };

  actions: {
    player: {
      startGame: ({
        playerName,
        playerId,
      }: {
        playerName: string;
        playerId: string;
      }) => any;
    };
  };
}

export interface MainMenuState {
  playerName: string;
  playerId: string;
  difficulty: number;
}

class MainMenu extends React.Component<MainMenuProps, MainMenuState> {
  constructor(props: MainMenuProps) {
    super(props);

    this.state = {
      playerName: "",
      playerId: "",
      difficulty: 0,
    };
  }

  /**
   * The main action that happens in **componentDidMount** is that
   * we check for cached player data. If found, we'll dispatch `startGame`
   * in order to pick back up.
   *
   * @TODO add support for handled cached resources
   */
  public componentDidMount() {
    const {
      actions: {
        player: { startGame },
      },
    } = this.props;

    const cachedPlayerData = localStorage.getItem("player");

    if (cachedPlayerData) {
      const { playerName = "", playerId = "" } = JSON.parse(cachedPlayerData);

      return startGame({ playerName, playerId });
    }
  }

  public handleOnChangePlayerName = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    return this.setState(() => ({ playerName: value }));
  }

  public generatePlayerId = () => {
    return this.setState({ playerId: uuid() });
  }

  /**
   * **handleStartGame** handles updating the `Player` reducer
   * with the `playerName` and `playerId`. We'll also store these
   * values in `localStorage` so that these values can persist.
   */
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

    // store player data in localStorage as a JSON value
    const playerData = { playerName, playerId };
    localStorage.setItem("player", JSON.stringify(playerData));

    // end method with dispatch to store values in Player reducer
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
