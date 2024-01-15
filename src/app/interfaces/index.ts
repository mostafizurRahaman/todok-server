export type IResponseData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};
