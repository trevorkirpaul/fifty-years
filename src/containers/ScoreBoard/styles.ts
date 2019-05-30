import styled, { css } from "styled-components";

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const ScoreBoard = styled.div`
  /* max-width: 500px; */
  /* margin: 0 auto; */
  padding: 15px;
  background: #383838;
  /* border-radius: 5px; */

  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 100%;
  padding: 0 15px;
`;

const Left = styled(Column)``;
const Right = styled(Column)``;

export interface RowProps {
  col?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  ${(props) =>
    props.col &&
    css`
      flex-direction: column;
      text-align: center;
    `}
`;

export interface TextProps {
  padBottom?: boolean;
}

const Text = styled.span<TextProps>`
  font-weight: 300;
  color: #f8f8f8;
  font-family: "Roboto", sans-serif;

  ${(props) =>
    props.padBottom &&
    css`
      padding-bottom: 10px;
    `}
`;

const BoldText = styled(Text)`
  font-weight: 600;
  color: #f8f8f8;
`;

export { ScoreBoard, Text, BoldText, Row, Left, Right, Bottom };
