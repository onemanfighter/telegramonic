export type ModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onModalClose: () => void;
  primaryButtonLabel?: string;
  onPrimaryButtonClick?: () => void;
};
