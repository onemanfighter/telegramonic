import { AppStoreState } from '@store';

const modalSelector = (state: AppStoreState) => ({
  openState: state.Modal.openState,
  modalData: state.Modal.modalData,
  openModal: state.Modal.openModal,
  closeModal: state.Modal.closeModal,
});

export { modalSelector };
