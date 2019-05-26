import React from "react";
import ReactDOM from "react-dom";

import * as S from "./styles";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: any;
  children: React.ReactNode;
}

class Modal extends React.Component<ModalProps> {
  public render() {
    const { children, isOpen } = this.props;

    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot || !isOpen) {
      return null;
    }

    return ReactDOM.createPortal(
      <S.Modal>
        <S.BackDrop />
        {children}
      </S.Modal>,
      modalRoot,
    );
  }
}

export default Modal;
