/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Todo = {
  __typename: "Todo",
  id: string,
  title: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  completed: boolean,
};

export type CreateTodoMutationVariables = {
  title: string,
  completed: boolean,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null,
};

export type UpdateTodoMutationVariables = {
  id: string,
  title: string,
  description: string,
  updatedAt: string,
  completed: boolean,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null,
};

export type DeleteTodoMutationVariables = {
  id: string,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null,
};

export type GetTodosQueryVariables = {
};

export type GetTodosQuery = {
  getTodos?:  Array< {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null > | null,
};

export type OnCreateTodoSubscriptionVariables = {
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    completed: boolean,
  } | null,
};
