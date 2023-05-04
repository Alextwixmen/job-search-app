import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    inherit
    theme={{
      components: {
        InputWrapper: {
          styles: (theme) => ({
            label: {
              backgroundColor: 'rgba(255, 255, 255, .1)',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '19px',
              marginBottom: '8px',
            },
          }),
        },
      },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
