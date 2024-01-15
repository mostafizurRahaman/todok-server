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

export const todoControllers = {
  createTodo,
};




