import { DrawerComponent } from '@components';
import { DrawerOpenState, appStore } from '@store';
import { drawerSelector, useShallow } from '@selectors';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { DrawerProviderProps } from './types';

const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openState, closeDrawer, drawerData } = appStore(
    useShallow(drawerSelector),
  );
  const onModalClose = () => {
    onClose();
    closeDrawer();
  };
  useEffect(() => {
    if (openState === DrawerOpenState.OPEN) {
      onOpen();
    } else {
      onModalClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openState, onOpen]);

  return (
    <>
      <DrawerComponent
        {...drawerData}
        onModalClose={onModalClose}
        isOpen={isOpen}
      />
      {children}
    </>
  );
};

export default DrawerProvider;
