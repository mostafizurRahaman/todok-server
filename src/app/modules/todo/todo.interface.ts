import { Model } from "mongoose";

/* eslint-disable no-unused-vars */
export type TStutus = "pending" | "completed";

export type TPriority = "low" | "medium" | "high";

export interface ITodo {
  title: string;
  description: string;
  status: TStutus;
  priority: TPriority;
  isDeleted?: string;
}

export interface ITodoModel extends Model<ITodo> {
  isTodoExists(id: string): Promise<ITodo | null>;
}
