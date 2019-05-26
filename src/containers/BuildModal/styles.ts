import HeadingBase from "components/Heading";
import styled from "styled-components";

const BuildModal = styled.div`
  position: fixed;
  height: 500px;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #b0bec5;
  z-index: 100000;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  margin-bottom: 15px;
`;

const Heading = styled(HeadingBase)`
  margin-bottom: 10px;
`;

const SelectionWrapper = styled.div`
  margin-bottom: 25px;
`;

const CurrentSelection = styled.div`
  border-top: 2px solid #78909c;
  border-bottom: 2px solid #78909c;

  & :nth-child(even) {
    &:not(span) {
      background-color: #eceff1;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

const ActionSection = styled.div`
  margin-top: auto;
  align-self: flex-end;
`;

export {
  BuildModal,
  TitleSection,
  Heading,
  SelectionWrapper,
  CurrentSelection,
  ActionSection,
  Row,
};
