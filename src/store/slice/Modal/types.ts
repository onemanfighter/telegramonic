export type ModalData = {
  title: string;
  message: string;
  onModalClose?: () => void;
  primaryButtonLabel?: string;
  onPrimaryButtonClick?: () => void;
};

export type ModalState = {
  modalData: ModalData;
  openState: ModelOpenState;
};

export enum ModelOpenState {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export interface ModalStateAction {
  openModal: (modalData: ModalData) => void;
  closeModal: () => void;
}

export type ModalStateSlice = ModalState & ModalStateAction;
