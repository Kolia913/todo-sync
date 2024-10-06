import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";





type EagerTodoModel = {
  readonly completed: boolean;
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly title: string;
  readonly updatedAt: string;
}

type LazyTodoModel = {
  readonly completed: boolean;
  readonly createdAt: string;
  readonly description?: string | null;
  readonly id: string;
  readonly title: string;
  readonly updatedAt: string;
}

export declare type TodoModel = LazyLoading extends LazyLoadingDisabled ? EagerTodoModel : LazyTodoModel

export declare const TodoModel: (new (init: ModelInit<TodoModel>) => TodoModel)

const { Todo } = initSchema(schema) as {
  Todo: PersistentModelConstructor<TodoModel>;
};

export {
  
};