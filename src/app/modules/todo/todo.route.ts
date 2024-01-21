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

router
  .route("/:id")
  .put(
    validateRequest(todoValidations.updateValidationSchema),
    todoControllers.updateTodo,
  )
  .delete(todoControllers.deleteTodo);

router.route("/").get(todoControllers.getTodos);
export const todoRoutes = router;
