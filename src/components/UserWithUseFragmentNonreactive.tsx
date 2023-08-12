import { Suspense } from 'react';
import { graphql } from '../gql/gql';
import { useFragment, useMutation, useSuspenseQuery } from '@apollo/client';

const FetchUserQueryForUseFragmentNonreactive = graphql(/* GraphQL */ `
  query FetchUserQueryForUseFragmentNonreactive($id: ID!) {
    user(id: $id) {
      id
      name
      todos {
        id
        ...TodoFragmentForUseFragmentNonreactive @nonreactive
      }
    }
  }
`);

export const UserWithUseFragmentNonreactive: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <User />
    </Suspense>
  );
};

const User: React.FC = () => {
  const userId = '1';
  const { data } = useSuspenseQuery(FetchUserQueryForUseFragmentNonreactive, {
    variables: { id: userId },
  });
  const user = data.user;

  if (!user) return <>Not found</>;
  return (
    <div>
      <h1>User</h1>
      <h2>name: {user.name}</h2>
      <h1>Todos</h1>
      <ul>
        {user.todos.map(({ id }) => (
          <Todo key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

const ToggleDoneMutation = graphql(/* GraphQL */ `
  mutation ToggleDoneMutation($id: ID!, $done: Boolean!) {
    updateTodo(input: { id: $id, done: $done }) {
      id
      done
    }
  }
`);

const TodoFragmentForUseFragmentNonreactive = graphql(/* GraphQL */ `
  fragment TodoFragmentForUseFragmentNonreactive on Todo {
    id
    text
    done
  }
`);

const Todo: React.FC<{ id: string }> = ({ id }) => {
  const [toggleDone] = useMutation(ToggleDoneMutation);

  const { complete, data: todo } = useFragment({
    fragment: TodoFragmentForUseFragmentNonreactive,
    fragmentName: 'TodoFragmentForUseFragmentNonreactive',
    from: {
      __typename: 'Todo',
      id,
    },
  });

  if (!complete) return null;
  return (
    <li key={todo.id}>
      {`${todo.text} `}
      <span
        onClick={() =>
          toggleDone({ variables: { id: todo.id, done: !todo.done } })
        }
        style={{ cursor: 'pointer' }}
      >
        {todo.done ? '✅' : '❌'}
      </span>
    </li>
  );
};
