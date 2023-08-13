/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query FetchUserQueryForBackground($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n": types.FetchUserQueryForBackgroundDocument,
    "\n  query FetchTodosQueryForBackground {\n    todos {\n      id\n      text\n      done\n    }\n  }\n": types.FetchTodosQueryForBackgroundDocument,
    "\n  query FetchUserQueryForUseFragment($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      todos {\n        id\n        ...TodoFragmentForUseFragment\n      }\n    }\n  }\n": types.FetchUserQueryForUseFragmentDocument,
    "\n  mutation ToggleDoneMutation($id: ID!, $done: Boolean!) {\n    updateTodo(input: { id: $id, done: $done }) {\n      id\n      done\n    }\n  }\n": types.ToggleDoneMutationDocument,
    "\n  fragment TodoFragmentForUseFragment on Todo {\n    id\n    text\n    done\n  }\n": types.TodoFragmentForUseFragmentFragmentDoc,
    "\n  query FetchUserQueryForUseFragmentNonreactive($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      todos {\n        id\n        ...TodoFragmentForUseFragmentNonreactive @nonreactive\n      }\n    }\n  }\n": types.FetchUserQueryForUseFragmentNonreactiveDocument,
    "\n  fragment TodoFragmentForUseFragmentNonreactive on Todo {\n    id\n    text\n    done\n  }\n": types.TodoFragmentForUseFragmentNonreactiveFragmentDoc,
    "\n  query FetchUserQueryForSuspense($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n": types.FetchUserQueryForSuspenseDocument,
    "\n  query FetchTodosQueryForSuspense {\n    todos {\n      id\n      text\n      done\n    }\n  }\n": types.FetchTodosQueryForSuspenseDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchUserQueryForBackground($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query FetchUserQueryForBackground($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTodosQueryForBackground {\n    todos {\n      id\n      text\n      done\n    }\n  }\n"): (typeof documents)["\n  query FetchTodosQueryForBackground {\n    todos {\n      id\n      text\n      done\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchUserQueryForUseFragment($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      todos {\n        id\n        ...TodoFragmentForUseFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchUserQueryForUseFragment($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      todos {\n        id\n        ...TodoFragmentForUseFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ToggleDoneMutation($id: ID!, $done: Boolean!) {\n    updateTodo(input: { id: $id, done: $done }) {\n      id\n      done\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleDoneMutation($id: ID!, $done: Boolean!) {\n    updateTodo(input: { id: $id, done: $done }) {\n      id\n      done\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TodoFragmentForUseFragment on Todo {\n    id\n    text\n    done\n  }\n"): (typeof documents)["\n  fragment TodoFragmentForUseFragment on Todo {\n    id\n    text\n    done\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchUserQueryForUseFragmentNonreactive($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      todos {\n        id\n        ...TodoFragmentForUseFragmentNonreactive @nonreactive\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchUserQueryForUseFragmentNonreactive($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      todos {\n        id\n        ...TodoFragmentForUseFragmentNonreactive @nonreactive\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TodoFragmentForUseFragmentNonreactive on Todo {\n    id\n    text\n    done\n  }\n"): (typeof documents)["\n  fragment TodoFragmentForUseFragmentNonreactive on Todo {\n    id\n    text\n    done\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchUserQueryForSuspense($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query FetchUserQueryForSuspense($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTodosQueryForSuspense {\n    todos {\n      id\n      text\n      done\n    }\n  }\n"): (typeof documents)["\n  query FetchTodosQueryForSuspense {\n    todos {\n      id\n      text\n      done\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;