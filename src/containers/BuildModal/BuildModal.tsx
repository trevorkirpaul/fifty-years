import React from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { BuildModalProps, BuildModalState } from "./types";

class BuildModal extends React.Component<BuildModalProps, BuildModalState> {
  public render() {
    const { buildModalOpen, closeModal, gold, food, wood } = this.props;
    return (
      <Modal modalIsOpen={buildModalOpen}>
        <h1>Build</h1>
        <p>This is a modal used when buillding on an empty tile</p>
        <p>gold: {gold}</p>
        <p>food: {food}</p>
        <p>wood: {wood}</p>
        <Button onClick={closeModal} disabled={false} loading={false}>
          cancel
        </Button>
      </Modal>
    );
  }
}
export default BuildModal;
