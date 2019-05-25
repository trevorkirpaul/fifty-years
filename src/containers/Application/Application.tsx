import React from "react";
import { connect } from "react-redux";

import { storeState } from "@redux/reducers";
import { gameReducerTypes } from "@redux/reducers/Game";
import { playerReducerTypes } from "@redux/reducers/Player";

import {
  game as gameSelector,
  player as playerSelector,
} from "@redux/selectors";
import MainMenu from "containers/MainMenu";
import ScoreBoard from "containers/ScoreBoard";

import BuildModal from "../BuildModal";
import Land from "../Land";

import { Wrapper } from "./styles";

export interface AppState {
  /**
   * `boolean` which will determine
   * whether or not the modal used when
   * building on an empty Tile is open
   */
  buildModalOpen: boolean;
  /**
   * When the modal is opened, `currentTileId`
   * will refer to the Tile from which the BuildModal was
   * opened
   */
  currentTileId: string;
}

export interface AppProps {
  data: {
    player: playerReducerTypes;
    game: gameReducerTypes;
  };
}

class Application extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      /**
       * UI state
       */

      buildModalOpen: false,
      currentTileId: "",
    };
  }

  public handleStartGame = ({
    playerName,
    playerId,
    difficulty,
  }: {
    playerName: string;
    playerId: string;
    difficulty: number;
  }) => {
    return console.log("UPDATE");
  }

  public handleOpenBuildModal = (id: string) => {
    return this.setState({ buildModalOpen: true, currentTileId: id });
  }

  public handleCloseBuildModal = () => {
    return this.setState({ buildModalOpen: false });
  }

  /**
   * This method comes from the Application container
   * and will handle all of the logic when building
   * or expanding on an empty Tile.
   *
   * @options is an object which contains:
   *
   * `tileId`: string represeting the Tile being worked on
   *
   * `action`: string representing how we are working/interacting
   * with the Tile. This can be "build" for example
   *
   * `buildingType`: optional string which is used when the `action`
   * is equal to "build" and will determine which type of building
   * replaces the empty Tile
   */
  public handleBuild = (options: {
    tileId: string;
    action: string;
    buildingType: string;
  }) => {
    return null;
  }

  public render() {
    const { buildModalOpen, currentTileId } = this.state;
    const {
      data: {
        player: { playerId, playerName },
      },
    } = this.props;

    if (!playerName || !playerId) {
      return <MainMenu />;
    }

    return (
      <Wrapper>
        <BuildModal
          currentTileId={currentTileId}
          buildModalOpen={buildModalOpen}
          closeModal={this.handleCloseBuildModal}
          handleBuild={this.handleBuild}
        />

        <ScoreBoard />

        <Land handleOpenBuildModal={this.handleOpenBuildModal} />
      </Wrapper>
    );
  }
}

const mapState = (state: storeState) => ({
  data: {
    player: playerSelector(state),
    game: gameSelector(state),
  },
});

export default connect(mapState)(Application);
