import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/Router';
import { LocalizationProvider } from './providers/LocalizationProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <RouterProvider router={appRouter} />
    </LocalizationProvider>
  </React.StrictMode>,
);

reportWebVitals();
