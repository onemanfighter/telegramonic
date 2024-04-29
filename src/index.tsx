import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppRouterProvider, LocalizationProvider } from '@providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <AppRouterProvider />
    </LocalizationProvider>
  </React.StrictMode>,
);

reportWebVitals();
