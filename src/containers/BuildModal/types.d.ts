interface BuildModalProps {
  buildModalOpen: boolean;
  closeModal: () => any;
  gold: number;
  food: number;
  wood: number;
}

interface BuildModalState {}

export { BuildModalProps, BuildModalState };
