import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './App/store/store'
import { Provider } from 'react-redux'
import axios from 'axios';
import {QueryClientProvider} from '@tanstack/react-query'
import queryClient from './QueryClient';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
