import React from "react";

import Land from "../../components/Land";
import MainMenu from "../../components/MainMenu";
import ScoreBoard from "../../components/ScoreBoard";
import BuildModal from "../BuildModal";

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
      gold: 100,
      food: 100,
      wood: 100,
      research: 0,
      divinity: 0,
      fields: 0,
      barracks: 0,
      logHouses: 0,
      houses: 0,
      soldiers: 0,
      citizens: 0,

      currentTileId: "",

      tiles: [
        {
          type: "empty",
          id: "1",
        },
        {
          type: "empty",
          id: "2",
        },
        {
          type: "empty",
          id: "3",
        },
        {
          type: "empty",
          id: "4",
        },
        {
          type: "empty",
          id: "5",
        },
        {
          type: "empty",
          id: "6",
        },

        {
          type: "empty",
          id: "7",
        },
        {
          type: "empty",
          id: "8",
        },
        {
          type: "empty",
          id: "9",
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
    const { gold } = this.state;

    if (gold <= 0) {
      return window.alert("NO GOLD!");
    }

    return this.setState((prev) => ({
      buildModalOpen: false,
      tiles: prev.tiles.map((t) => {
        /**
         * find the tile by id and
         * set it's building type
         * to the one specified in
         * the options supplied from the arg
         */
        if (t.id === options.tileId) {
          return {
            ...t,
            type: options.buildingType,
          };
        }

        return t;
      }),
    }));
  }

  public render() {
    const {
      buildModalOpen,
      playerName,
      playerId,
      difficulty,
      currentYear,
      gold,
      food,
      wood,
      fields,
      barracks,
      houses,
      soldiers,
      citizens,
      currentTileId,
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
        <BuildModal
          currentTileId={currentTileId}
          buildModalOpen={buildModalOpen}
          closeModal={this.handleCloseBuildModal}
          handleBuild={this.handleBuild}
          gold={gold}
          food={food}
          wood={wood}
        />

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
