import z from "zod";
import { TodoStatus, todoPriority } from "./todo.constant";

const createTodoValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: "Title shouldn't be string!!",
        required_error: "Title is required!!!",
      })
      .min(1, { message: "Todo Title shouldn't be empty!!!" }),
    description: z
      .string({
        invalid_type_error: "description shouldn't be empty!!!",
        required_error: "Description shouldn't be empty!!!",
      })
      .min(1, { message: "Todo description shouldn't be empty!!" }),
    status: z.enum([...TodoStatus] as [string, ...string[]]).default("pending"),
    priority: z.enum([...todoPriority] as [string, ...string[]]),
  }),
});
const updateValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: "Title shouldn't be string!!",
        required_error: "Title is required!!!",
      })
      .min(1, { message: "Todo Title shouldn't be empty!!!" })
      .optional(),
    description: z
      .string({
        invalid_type_error: "description shouldn't be empty!!!",
        required_error: "Description shouldn't be empty!!!",
      })
      .min(1, { message: "Todo description shouldn't be empty!!" })
      .optional(),
    status: z
      .enum([...TodoStatus] as [string, ...string[]])
      .default("pending")
      .optional(),
    priority: z.enum([...todoPriority] as [string, ...string[]]).optional(),
  }),
});

export const todoValidations = {
  createTodoValidationSchema,
  updateValidationSchema,
};
