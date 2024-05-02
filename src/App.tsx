import React from 'react';
import {
  AlertProvider,
  AppRouterProvider,
  LocalizationProvider,
  ModalProvider,
  ThemeProvider,
} from '@providers';

const App = () => {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <LocalizationProvider>
          <AlertProvider>
            <ModalProvider>
              <AppRouterProvider />
            </ModalProvider>
          </AlertProvider>
        </LocalizationProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
};

export default App;
