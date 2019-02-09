import React from "react";

import Land from "../../components/Land";
import MainMenu from "../../components/MainMenu";
import ScoreBoard from "../../components/ScoreBoard";

import { Wrapper } from "./styles";
import { AppProps, AppState } from "./types";

class Application extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      /**
       * UI state
       */

      buildModalOpen: false,

      /**
       * Game logic related state
       */
      playerName: "Trevor",
      playerId: "sdfsdf",
      difficulty: 0,
      currentYear: 0,
      gold: 0,
      food: 0,
      wood: 0,
      research: 0,
      divinity: 0,
      fields: 0,
      barracks: 0,
      logHouses: 0,
      houses: 0,
      soldiers: 0,
      citizens: 0,

      tiles: [
        {
          type: "empty",
          id: "1234",
        },
        {
          type: "empty",
          id: "1235",
        },
        {
          type: "empty",
          id: "1236",
        },
        {
          type: "empty",
          id: "1237",
        },
        {
          type: "empty",
          id: "1238",
        },
        {
          type: "empty",
          id: "1239",
        },
      ],
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
    return this.setState({
      playerName,
      playerId,
      difficulty,
    });
  }

  public handleOpenBuildModal = () => {};

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
  public handleBuild = (options: { tileId: string }) => {
    const { gold } = this.state;

    if (gold <= 0) {
      return window.alert("NO GOLD!");
    }
  }

  public render() {
    const {
      playerName,
      playerId,
      difficulty,
      currentYear,
      gold,
      food,
      fields,
      barracks,
      houses,
      soldiers,
      citizens,
      tiles,
    } = this.state;

    if (!playerName || !playerId) {
      return (
        <MainMenu
          playerName={playerName}
          playerId={playerId}
          difficulty={difficulty}
          handleStartGame={this.handleStartGame}
        />
      );
    }

    return (
      <Wrapper>
        <ScoreBoard
          playerName={playerName}
          currentYear={currentYear}
          gold={gold}
          food={food}
          fields={fields}
          barracks={barracks}
          houses={houses}
          soldiers={soldiers}
          citizens={citizens}
        />

        <Land tiles={tiles} handleOpenBuildModal={this.handleOpenBuildModal} />
      </Wrapper>
    );
  }
}

export default Application;
