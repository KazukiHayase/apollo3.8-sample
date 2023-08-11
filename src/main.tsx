import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserWithUseSuspenceQuery } from './UserWithUseSuspenceQuery';

const router = createBrowserRouter([
  {
    path: 'userWithUseSuspenceQuery',
    Component: UserWithUseSuspenceQuery,
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
