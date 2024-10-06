/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo($title: String!, $completed: Boolean!) {
  createTodo(title: $title, completed: $completed) {
    id
    title
    description
    createdAt
    updatedAt
    completed
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $id: ID!
  $title: String!
  $description: String!
  $updatedAt: String!
  $completed: Boolean!
) {
  updateTodo(
    id: $id
    title: $title
    description: $description
    updatedAt: $updatedAt
    completed: $completed
  ) {
    id
    title
    description
    createdAt
    updatedAt
    completed
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
    title
    description
    createdAt
    updatedAt
    completed
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
