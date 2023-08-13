import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserWithUseSuspenseQuery } from './components/UserWithUseSuspenseQuery';
import { UserWithUseBackgroundQuery } from './components/UserWithUseBackgroundQuery';
import { UserWithUseFragment } from './components/UserWithUseFragment';
import { UserWithUseFragmentNonreactive } from './components/UserWithUseFragmentNonreactive';

const router = createBrowserRouter([
  {
    path: 'userWithUseSuspenseQuery',
    Component: UserWithUseSuspenseQuery,
  },
  {
    path: 'userWithUseBackgroundQuery',
    Component: UserWithUseBackgroundQuery,
  },
  {
    path: 'userWithUseFragment',
    Component: UserWithUseFragment,
  },
  {
    path: 'userWithUseFragmentNonreactive',
    Component: UserWithUseFragmentNonreactive,
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
