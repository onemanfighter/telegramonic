import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {
  AlertProvider,
  AppRouterProvider,
  LocalizationProvider,
  ModalProvider,
} from '@providers';
import { appStore } from '@store';
import { themeSelector, useShallow } from '@selectors';

const App = () => {
  const { theme } = appStore(useShallow(themeSelector));
  return (
    <ChakraProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <AlertProvider>
            <ModalProvider>
              <AppRouterProvider />
            </ModalProvider>
          </AlertProvider>
        </LocalizationProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
};

export default App;
