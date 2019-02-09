import React from "react";

import MainMenu from "../../components/MainMenu";
import ScoreBoard from "../../components/ScoreBoard";

import { Wrapper } from "./styles";
import { AppProps, AppState } from "./types";

class Application extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      playerName: "Trevor",
      playerId: "sdfsdf",
      difficulty: 0,
      currentYear: 0,
      gold: 0,
      food: 0,
      research: 0,
      divinity: 0,
      fields: 0,
      barracks: 0,
      houses: 0,
      soldiers: 0,
      citizens: 0,
    };
  }

  public handleStartGame = ({
    playerName,
    playerId,
    difficulty,
  }: {
    playerName: string
    playerId: string
    difficulty: number,
  }) => {
    return this.setState({
      playerName,
      playerId,
      difficulty,
    });
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
      </Wrapper>
    );
  }
}

export default Application;
