interface ModalProps {
  modalIsOpen: boolean;
  afterOpenModal: () => any;
  closeModal: () => any;
  customStyles: object;
  children: any;
  contentLabel: string;
}

interface ModalState {}

export { ModalProps, ModalState };
