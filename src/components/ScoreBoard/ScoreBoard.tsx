import React from "react";

import { BoldText, Section, Text, Wrapper } from "./styles";
import { ScoreBoardProps } from "./types";

const ScoreBoard = (props: ScoreBoardProps) => {
  return (
    <Wrapper>
      <Section>
        <BoldText>Player:</BoldText>
        <Text>{props.playerName}</Text>
      </Section>
      <Section>
        <BoldText>Current Year:</BoldText>
        <Text>{props.currentYear}</Text>
      </Section>
      <Section>
        <BoldText>Gold:</BoldText>
        <Text>{props.gold}</Text>
      </Section>
      <Section>
        <BoldText>Food:</BoldText>
        <Text>{props.food}</Text>
      </Section>
      <Section>
        <Section col>
          <Text padBottom>Houses</Text>
          <Text>{props.houses}</Text>
        </Section>

        <Section col>
          <Text padBottom>Barracks</Text>
          <Text>{props.barracks}</Text>
        </Section>

        <Section col>
          <Text padBottom>Fields</Text>
          <Text>{props.fields}</Text>
        </Section>
      </Section>
    </Wrapper>
  );
};

export default ScoreBoard;
