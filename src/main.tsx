import React from 'react';
import ReactDOM from 'react-dom/client';
import { SuspenseUseQuery } from './SuspenseUseQuery.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const router = createBrowserRouter([
  {
    path: 'user',
    Component: SuspenseUseQuery,
  },
]);

const client = new ApolloClient({
  uri: 'http://localhost:8888/query',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
