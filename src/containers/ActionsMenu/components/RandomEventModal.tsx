import React, { SetStateAction } from "react";

import Button from "components/Button";
import Heading from "components/Heading";
import Modal from "components/Modal/_Modal";
import Text from "components/Text";

import * as S from "../styles";

export interface RandomEventModalProps {
  isOpen: boolean;
  toggleRandomEventModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
  eventType: string;
}

const RandomEventModal = ({
  isOpen,
  toggleRandomEventModalIsOpen,
  eventType,
}: RandomEventModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <S.RandomEventModal>
        <S.RandomEventModalSection>
          <Heading>A Random Event has occurred</Heading>
          <Text>{eventType}</Text>
        </S.RandomEventModalSection>
        <Button onClick={() => toggleRandomEventModalIsOpen(false)}>
          close
        </Button>
      </S.RandomEventModal>
    </Modal>
  );
};

RandomEventModal.defaultProps = {
  eventType: "",
};

export default RandomEventModal;
