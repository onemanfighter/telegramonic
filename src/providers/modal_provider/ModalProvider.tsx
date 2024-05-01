import { ModalComponent } from '@components';
import { ModelOpenState, appStore } from '@store';
import { modalSelector, useShallow } from '@selectors';

import { ModalProviderProps } from './types';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openState, modalData, closeModal } = appStore(
    useShallow(modalSelector),
  );
  const onModalClose = () => {
    onClose();
    closeModal();
  };
  useEffect(() => {
    if (openState === ModelOpenState.OPEN) {
      onOpen();
    } else {
      onModalClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openState, onOpen]);

  return (
    <>
      <ModalComponent
        {...modalData}
        onModalClose={onModalClose}
        isOpen={isOpen}
      />
      {children}
    </>
  );
};

export default ModalProvider;
