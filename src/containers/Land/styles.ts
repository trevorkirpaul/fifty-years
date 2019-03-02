import styled from "styled-components";

interface WrapperProps {
  tiles?: any[];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  justify-content: ${(props: WrapperProps) =>
    props.tiles && props.tiles.length === 1 ? "flex-start" : "space-between"};

  max-width: 500px;
  /* padding: 15px; */
  margin: 10px auto 0 auto;
`;

export { Wrapper };
