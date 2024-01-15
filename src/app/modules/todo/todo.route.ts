import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { todoValidations } from "./todo.validation";
import { todoControllers } from "./todo.controller";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(todoValidations.createTodoValidationSchema),
    todoControllers.createTodo,
  );

export const todoRoutes = router;
