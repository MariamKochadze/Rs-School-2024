import { ErrorBoundary } from '@components/errorBoundary/ErrorBoundary.tsx';
import { ThemeProvider } from '@contexts/themeProvider.tsx';
import { Router } from '@router/router.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import './styles/index.scss';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
