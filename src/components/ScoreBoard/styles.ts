import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
  background: #383838;
  border-radius: 5px;
`;

interface SectionProps {
  col?: boolean;
}

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  ${(props: SectionProps) =>
    props.col &&
    css`
      flex-direction: column;
      text-align: center;
    `}
`;

interface TextProps {
  padBottom?: boolean;
}

const Text = styled.span`
  font-weight: 300;
  color: #f8f8f8;
  font-family: sans-serif;

  ${(props: TextProps) =>
    props.padBottom &&
    css`
      padding-bottom: 10px;
    `}
`;

const BoldText = styled(Text)`
  font-weight: 600;
  color: #f8f8f8;
`;

export { Wrapper, Text, BoldText, Section };
