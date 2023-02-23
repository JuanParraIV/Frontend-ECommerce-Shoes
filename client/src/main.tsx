import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './QueryClient';
import { Auth0Provider } from '@auth0/auth0-react';
const auth0ClientId = 'dpKc1pJVRNwGXRNEdewkF7YPVhGwc7zQ';
const auth0Domain = 'dev-kodc0s8muewlew22.us.auth0.com';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider clientId={auth0ClientId} domain={auth0Domain} authorizationParams={{
      redirect_uri: `${window.location.origin}/callback`
    }}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
