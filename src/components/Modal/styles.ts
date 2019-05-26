import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

const BackDrop = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
`;

export { BackDrop, Modal };
