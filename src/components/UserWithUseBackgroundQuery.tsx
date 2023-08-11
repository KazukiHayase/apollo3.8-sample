import { Suspense } from 'react';
import { graphql } from '../gql/gql';
import {
  QueryReference,
  useBackgroundQuery,
  useReadQuery,
  useSuspenseQuery,
} from '@apollo/client';
import { FetchTodosQueryForBackgroundQuery } from '../gql/graphql';

const FetchUserQueryForBackground = graphql(/* GraphQL */ `
  query FetchUserQueryForBackground($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`);

const FetchTodosQueryForBackground = graphql(/* GraphQL */ `
  query FetchTodosQueryForBackground {
    todos {
      id
      text
      done
    }
  }
`);

export const UserWithUseBackgroundQuery: React.FC = () => {
  const [queryRef] = useBackgroundQuery(FetchTodosQueryForBackground);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <User queryRef={queryRef} />
    </Suspense>
  );
};

const User: React.FC<{
  queryRef: QueryReference<FetchTodosQueryForBackgroundQuery>;
}> = ({ queryRef }) => {
  const { data } = useSuspenseQuery(FetchUserQueryForBackground, {
    variables: { id: '1' },
  });
  const user = data.user;

  if (!user) return <>Not found</>;
  return (
    <div>
      <h1>User</h1>
      <h2>name: {user.name}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos queryRef={queryRef} />
      </Suspense>
    </div>
  );
};

const Todos: React.FC<{
  queryRef: QueryReference<FetchTodosQueryForBackgroundQuery>;
}> = ({ queryRef }) => {
  const { data } = useReadQuery(queryRef);
  const todos = data.todos;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.text} {todo.done ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};
