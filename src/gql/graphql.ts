/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodo;
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
  user?: Maybe<User>;
};


export type QueryTodosArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type UpdateTodo = {
  done?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  todos: Array<Todo>;
};

export type FetchUserQueryForBackgroundQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchUserQueryForBackgroundQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string } | null };

export type FetchTodosQueryForBackgroundQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTodosQueryForBackgroundQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, text: string, done: boolean }> };

export type FetchUserQueryForSuspenceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchUserQueryForSuspenceQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string } | null };

export type FetchTodosQueryForSuspenceQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTodosQueryForSuspenceQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, text: string, done: boolean }> };


export const FetchUserQueryForBackgroundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserQueryForBackground"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchUserQueryForBackgroundQuery, FetchUserQueryForBackgroundQueryVariables>;
export const FetchTodosQueryForBackgroundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTodosQueryForBackground"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"done"}}]}}]}}]} as unknown as DocumentNode<FetchTodosQueryForBackgroundQuery, FetchTodosQueryForBackgroundQueryVariables>;
export const FetchUserQueryForSuspenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserQueryForSuspence"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchUserQueryForSuspenceQuery, FetchUserQueryForSuspenceQueryVariables>;
export const FetchTodosQueryForSuspenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTodosQueryForSuspence"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"done"}}]}}]}}]} as unknown as DocumentNode<FetchTodosQueryForSuspenceQuery, FetchTodosQueryForSuspenceQueryVariables>;