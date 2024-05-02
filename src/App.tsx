import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {
  AlertProvider,
  AppRouterProvider,
  LocalizationProvider,
  ModalProvider,
} from '@providers';
import { DrawerProvider } from './providers/drawer_provider';

const App = () => {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <DrawerProvider>
            <AlertProvider>
              <ModalProvider>
                <AppRouterProvider />
              </ModalProvider>
            </AlertProvider>
          </DrawerProvider>
        </LocalizationProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
};

export default App;
