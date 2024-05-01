import { AppStoreSlice } from '../../appStore/types';
import { ModalState, ModalStateSlice, ModelOpenState } from './types';

const initialAlertState: ModalState = {
  modalData: {
    title: '',
    message: '',
    onModalClose: () => {},
    primaryButtonLabel: '',
    onPrimaryButtonClick: () => {},
  },
  openState: ModelOpenState.CLOSE,
};

const createModalSlice: AppStoreSlice<ModalStateSlice> = (set) => ({
  ...initialAlertState,
  openModal: (modalData) => {
    set((state) => {
      state.Modal.modalData = modalData;
      state.Modal.openState = ModelOpenState.OPEN;
    });
  },
  closeModal: () => {
    set((state) => {
      state.Modal.openState = ModelOpenState.CLOSE;
    });
    setTimeout(() => {
      set((state) => {
        state.Modal.modalData = initialAlertState.modalData;
      });
    }, 500 /* 0.5s */);
  },
});

export default createModalSlice;
