import React from "react";
import ReactModal from "react-modal";

import { ModalProps, ModalState } from "./types";

ReactModal.setAppElement("#root");

class Modal extends React.Component<ModalProps> {
  public static defaultProps = {
    modalIsOpen: false,
    afterOpenModal: () => {},
    closeModal: () => {},
    customStyles: {},
    children: null,
    contentLabel: "missing label",
  };

  public render() {
    const {
      modalIsOpen,
      afterOpenModal,
      closeModal,
      customStyles,
      children,
      contentLabel,
    } = this.props;

    return (
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={contentLabel}
      >
        {children}
      </ReactModal>
    );
  }
}

export default Modal;
