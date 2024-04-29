import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LocalizationProvider } from './providers/LocalizationProvider';
import { AppRouterProvider } from './providers/router_provider';
import { appStore } from '@store';
import { themeSelector, useShallow } from '@selectors';

const App = () => {
  const { theme } = appStore(useShallow(themeSelector));
  return (
    <ChakraProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <AppRouterProvider />
        </LocalizationProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
};

export default App;
