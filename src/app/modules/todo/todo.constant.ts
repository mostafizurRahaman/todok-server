import { TPriority, TStutus } from "./todo.interface";

export const TodoStatus: TStutus[] = ["pending", "completed"];
export const todoPriority: TPriority[] = ["low", "medium", "high"];
export const searchableFields: string[] = ["title", "description", "priority"];
