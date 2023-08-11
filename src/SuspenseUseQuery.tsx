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

const FetchTodosQuery = graphql(/* GraphQL */ `
  query FetchTodosQuery($userId: ID!) {
    todos(userId: $userId) {
      id
      text
      done
    }
  }
`);

export const SuspenseUseQuery: React.FC = () => {
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
      <h2>name: {user.name}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos userId={user.id} />
      </Suspense>
    </div>
  );
};

const Todos: React.FC<{ userId: string }> = ({ userId }) => {
  const { data } = useSuspenseQuery(FetchTodosQuery, {
    variables: { userId: userId },
  });
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
