import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TodoServices } from "./todo.services";

//  ** create todo services:
const createTodo = catchAsync(async (req, res) => {
  const result = await TodoServices.createTodoIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo created Successfully!!!",
    data: result,
  });
});

// **  get todo controller:
const getTodos = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await TodoServices.getTodoFromDB(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todos retrieved successfully!!!",
    data: result,
  });
});

// ** update todo controllers:
const updateTodo = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await TodoServices.updateTodoService(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Todo is updated successfully!!!`,
    data: result,
  });
});
// ** delete todo controllers:
const deleteTodo = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await TodoServices.deleteTodoFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Todo is updated successfully!!!`,
    data: result,
  });
});

export const todoControllers = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
