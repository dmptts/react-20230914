import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main/component';
import { ThemeProvider } from './contexts/ThemeContext';
import 'normalize-scss';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
