import React from "react";
import { connect } from "react-redux";

import { storeState } from "@redux/reducers";
import { gameReducerTypes } from "@redux/reducers/Game";
import { playerReducerTypes } from "@redux/reducers/Player";

import {
  game as gameSelector,
  player as playerSelector,
} from "@redux/selectors";

import { BoldText, Section, Text, Wrapper } from "./styles";

export interface ScoreBoardProps {
  data: {
    game: gameReducerTypes;
    player: playerReducerTypes;
  };
}

export interface ScoreBoardState {}

class ScoreBoard extends React.Component<ScoreBoardProps, ScoreBoardState> {
  public render() {
    const {
      data: {
        player: { playerName },
        game: { currentYear, gold, food, houses, barracks, fields },
      },
    } = this.props;

    return (
      <Wrapper>
        <Section>
          <BoldText>Player:</BoldText>
          <Text>{playerName}</Text>
        </Section>
        <Section>
          <BoldText>Current Year:</BoldText>
          <Text>{currentYear}</Text>
        </Section>
        <Section>
          <BoldText>Gold:</BoldText>
          <Text>{gold}</Text>
        </Section>
        <Section>
          <BoldText>Food:</BoldText>
          <Text>{food}</Text>
        </Section>
        <Section>
          <Section col>
            <Text padBottom>Houses</Text>
            <Text>{houses}</Text>
          </Section>

          <Section col>
            <Text padBottom>Barracks</Text>
            <Text>{barracks}</Text>
          </Section>

          <Section col>
            <Text padBottom>Fields</Text>
            <Text>{fields}</Text>
          </Section>
        </Section>
      </Wrapper>
    );
  }
}

const mapState = (state: storeState) => ({
  data: {
    game: gameSelector(state),
    player: playerSelector(state),
  },
});

export default connect(mapState)(ScoreBoard);
