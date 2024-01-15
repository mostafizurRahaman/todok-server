import { Schema, model } from "mongoose";
import { ITodo } from "./todo.interface";
import { TodoStatus, todoPriority } from "./todo.constant";

const todoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      trim: true,
      minlength: 1,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      minlength: 1,
      required: true,
    },
    status: {
      type: String,
      enum: TodoStatus,
      default: "pending",
    },
    priority: {
      type: String,
      enum: todoPriority,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Todo = model<ITodo>("todo", todoSchema);

export default Todo;
