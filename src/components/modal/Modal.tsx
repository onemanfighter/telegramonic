import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ModalProps } from './types';
import { useTranslation } from 'react-i18next';

const ModalComponent = ({
  isOpen,
  title,
  message,
  onModalClose,
  primaryButtonLabel,
  onPrimaryButtonClick,
}: ModalProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{message}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onPrimaryButtonClick}>
              {primaryButtonLabel}
            </Button>
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={() => {
                onModalClose();
              }}
            >
              {t('close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
