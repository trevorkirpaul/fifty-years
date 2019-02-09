import styled from "styled-components";

const StyledButtonBase = styled.button`
  display: inline-block;
  padding: 10px 15px;
  border: none;
  background: #383838;
  color: #f8f8f8;
  margin: 5px;

  &:hover {
    cursor: pointer;
    color: palevioletred;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      color: white;
      cursor: not-allowed;
    }
  }
`;

export { StyledButtonBase };
