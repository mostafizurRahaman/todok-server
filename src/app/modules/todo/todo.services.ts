import httpStatus from "http-status";
import QueryBuilder from "../../builders/QueryBuilder";
import AppError from "../../errors/AppError";
import { searchableFields } from "./todo.constant";
import { ITodo } from "./todo.interface";
import Todo from "./todo.model";

//  ** create todo services:
const createTodoIntoDB = async (payload: ITodo) => {
  const result = Todo.create(payload);
  return result;
};

// ** get todo services:
const getTodoFromDB = async (query: Record<string, unknown>) => {
  const TaskQuery = new QueryBuilder(Todo.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await TaskQuery.modelQuery;
  return result;
};

// ** update todo application:
const updateTodoService = async (id: string, payload: Partial<ITodo>) => {
  // ** check is todo exists :
  const todo = await Todo.isTodoExists(id);

  if (!todo) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `Todo not Found with This Id ${id}`,
    );
  }

  // ** check if completed Once Please don't update other information:
  // if (todo.status === "completed") {
  //   throw new AppError(
  //     httpStatus.CONFLICT,
  //     "Todo Already Completed!!! You Can't update!!!",
  //   );
  // }
  const result = await Todo.findByIdAndUpdate(
    id,
    { $set: payload },
    {
      new: true,
      runValidators: true,
    },
  );

  console.log(result);

  return result;
};

// ** delete todo by id services :
const deleteTodoFromDB = async (id: string) => {
  if (!(await Todo.isTodoExists(id))) {
    throw new AppError(httpStatus.CONFLICT, "Already Deleted Successfully!!!");
  }

  const result = await Todo.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );

  return result;
};

export const TodoServices = {
  createTodoIntoDB,
  getTodoFromDB,
  updateTodoService,
  deleteTodoFromDB,
};
