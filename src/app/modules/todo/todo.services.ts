import { ITodo } from "./todo.interface";
import Todo from "./todo.model";

//  ** create todo services:
const createTodoIntoDB = async (payload: ITodo) => {
  const result = Todo.create(payload);
  return result;
};

export const TodoServices = {
  createTodoIntoDB,
};
