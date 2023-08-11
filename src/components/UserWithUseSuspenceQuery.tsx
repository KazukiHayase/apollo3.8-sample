import { Suspense } from 'react';
import { graphql } from '../gql/gql';
import { useSuspenseQuery } from '@apollo/client';

const FetchUserQueryForSuspence = graphql(/* GraphQL */ `
  query FetchUserQueryForSuspence($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`);

const FetchTodosQueryForSuspence = graphql(/* GraphQL */ `
  query FetchTodosQueryForSuspence {
    todos {
      id
      text
      done
    }
  }
`);

export const UserWithUseSuspenceQuery: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <User />
    </Suspense>
  );
};

const User: React.FC = () => {
  const { data } = useSuspenseQuery(FetchUserQueryForSuspence, {
    variables: { id: '1' },
  });
  const user = data.user;

  if (!user) return <>Not found</>;
  return (
    <div>
      <h1>User</h1>
      <h2>name: {user.name}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

const Todos: React.FC = () => {
  const { data } = useSuspenseQuery(FetchTodosQueryForSuspence);
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
