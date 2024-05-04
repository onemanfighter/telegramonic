import React from 'react';
import {
  AlertProvider,
  AppRouterProvider,
  LocalizationProvider,
  ModalProvider,
  ThemeProvider,
} from '@providers';
import { DrawerProvider } from './providers/drawer_provider';

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
