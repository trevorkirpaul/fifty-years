import React from "react";

import Button from "components/Button";
import Heading from "components/Heading";
import Modal from "components/Modal/_Modal";

import * as S from "../styles";

export interface ActionsModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const ActionsModal = ({ isOpen, handleCloseModal }: ActionsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <S.ActionsModal>
        <Heading>Actions</Heading>

        <Button onClick={handleCloseModal}>Close</Button>
      </S.ActionsModal>
    </Modal>
  );
};

export default ActionsModal;
