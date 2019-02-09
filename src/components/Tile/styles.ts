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

const Text = styled.span`
  font-family: sans-serif;
`;

export { Wrapper, Text };
