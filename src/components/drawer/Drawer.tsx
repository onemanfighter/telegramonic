import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { DrawerProps } from './types';

const DrawerComponent = ({
  title,
  isOpen,
  children,
  footer,
  onModalClose,
}: DrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onModalClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody>
          {children}
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
