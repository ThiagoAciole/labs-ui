import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastProvider, ThemeProvider } from '@aciolelabs/labs-ui';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ToastProvider position="top-right">
                <App />
            </ToastProvider>
        </ThemeProvider>
    </React.StrictMode>
);




