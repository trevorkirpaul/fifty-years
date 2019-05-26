import React from "react";
import { connect } from "react-redux";

import { storeState } from "@redux/reducers";
import { gameReducerTypes } from "@redux/reducers/Game";
import { playerReducerTypes } from "@redux/reducers/Player";

import {
  game as gameSelector,
  player as playerSelector,
} from "@redux/selectors";

import * as S from "./styles";

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
        game: { currentYear, gold, food, wood, houses, barracks, fields },
      },
    } = this.props;

    return (
      <S.ScoreBoard>
        <S.Row>
          <S.BoldText>Player:</S.BoldText>
          <S.Text>{playerName}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Current Year:</S.BoldText>
          <S.Text>{currentYear}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Gold:</S.BoldText>
          <S.Text>{gold}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Food:</S.BoldText>
          <S.Text>{food}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Wood:</S.BoldText>
          <S.Text>{wood}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Houses:</S.BoldText>
          <S.Text>{houses}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Barracks:</S.BoldText>
          <S.Text>{barracks}</S.Text>
        </S.Row>
        <S.Row>
          <S.BoldText>Fields:</S.BoldText>
          <S.Text>{fields}</S.Text>
        </S.Row>
      </S.ScoreBoard>
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
