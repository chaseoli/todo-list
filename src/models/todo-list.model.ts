import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {TodoListImage} from './todo-list-image.model';
import {Todo} from './todo.model';

@model({
  settings: {
    // mssql: {table: 'todo_list'}
  }
})
export class TodoList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  color?: string;

  @hasMany(() => Todo)
  todos: Todo[];

  @hasOne(() => TodoListImage)
  image: TodoListImage;

  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}

export interface TodoListRelations {
  // describe navigational properties here
}

export type TodoListWithRelations = TodoList & TodoListRelations;
