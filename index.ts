import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";





type EagerTodoModel = {
  readonly completed: boolean;
  readonly createdAt?: string | null;
  readonly description?: string | null;
  readonly id: string;
  readonly title: string;
  readonly updatedAt?: string | null;
}

type LazyTodoModel = {
  readonly completed: boolean;
  readonly createdAt?: string | null;
  readonly description?: string | null;
  readonly id: string;
  readonly title: string;
  readonly updatedAt?: string | null;
}

export declare type TodoModel = LazyLoading extends LazyLoadingDisabled ? EagerTodoModel : LazyTodoModel

export declare const TodoModel: (new (init: ModelInit<TodoModel>) => TodoModel)

const { Todo } = initSchema(schema) as {
  Todo: PersistentModelConstructor<TodoModel>;
};

export {
  
};