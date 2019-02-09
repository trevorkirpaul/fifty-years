import styled from "styled-components";

const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 300;
  font-size: 45px;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 500px;
  margin: 25px auto;
`;

export { Wrapper, Title };
