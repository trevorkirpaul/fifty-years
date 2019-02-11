import styled from "styled-components";

// interface styledButtonBaseTypes {
//   onClick: any;
// }

const StyledButtonBase = styled.button`
  display: inline-block;
  padding: 10px 15px;
  border: none;
  background: #383838;
  color: #f8f8f8;
  margin: 5px;

  font-family: "Roboto", sans-serif;

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
