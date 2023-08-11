import { Suspense } from 'react';
import { graphql } from './gql/gql';
import { useSuspenseQuery } from '@apollo/client';

const FetchUserQuery = graphql(/* GraphQL */ `
  query FetchUserQuery($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`);

export const SuspenseUseQuery: React.FC = () => {
  console.log('SuspenseUseQuery');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <User />
    </Suspense>
  );
};

const User: React.FC = () => {
  const { data } = useSuspenseQuery(FetchUserQuery, { variables: { id: '1' } });
  const user = data.user;

  if (!user) return <>Not found</>;
  return (
    <div>
      <h1>User</h1>
      <p>name: {user.name}</p>
    </div>
  );
};
