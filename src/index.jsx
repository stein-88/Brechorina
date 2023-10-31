import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client';
import App from '@container';
import client from '@constants/client';
import '@stylesheets/fontawesome/css/all.min.css';
import '@stylesheets/globalStyles.scss';
import '@stylesheets/mobiletext.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
