import { Schema, model } from "mongoose";
import { ITodo, ITodoModel } from "./todo.interface";
import { TodoStatus, todoPriority } from "./todo.constant";

const todoSchema = new Schema<ITodo, ITodoModel>(
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

// ** don't sent deleted todo in frontend :
todoSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $eq: false } });

  next();
});

//  ** define a todo static method:
todoSchema.statics.isTodoExists = async (_id: string) => {
  const isExists = await Todo.findById(_id);
  return isExists;
};
const Todo = model<ITodo, ITodoModel>("todo", todoSchema);

export default Todo;
