import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  width: 28%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background: palevioletred;
  margin-bottom: 15px;
`;

const FieldTileWrapper = styled(Wrapper)`
  background: #c5e1a5;
`;

const BarracksTileWrapper = styled(Wrapper)`
  background: #a1887f;
`;

const HouseTileWrapper = styled(Wrapper)`
  background: #b3e5fc;
`;

const Text = styled.span`
  font-family: "Roboto", sans-serif;
`;

export {
  Wrapper,
  Text,
  FieldTileWrapper,
  BarracksTileWrapper,
  HouseTileWrapper,
};
