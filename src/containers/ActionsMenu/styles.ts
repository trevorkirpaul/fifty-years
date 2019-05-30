import styled from "styled-components";

const ActionMenu = styled.div`
  /* margin: 25px auto; */
  /* max-width: 500px; */
  width: 100%;

  background: #616161;

  padding: 5px;
  /* border-radius: 5px; */

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RandomEventModal = styled.div`
  position: fixed;
  height: 300px;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px;
  border-radius: 5px;

  background-color: #fff;
  z-index: 100000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionsModal = styled.div`
  position: fixed;
  height: 300px;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px;
  border-radius: 5px;

  background-color: #fff;
  z-index: 100000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RandomEventModalSection = styled.div``;

export { ActionMenu, RandomEventModal, RandomEventModalSection, ActionsModal };
