export type TStutus = "pending" | "completed";

export type TPriority = "low" | "middle" | "high";

export interface ITodo {
  title: string;
  description: string;
  status: TStutus;
  priority: TPriority;
  isDeleted?: string;
}
