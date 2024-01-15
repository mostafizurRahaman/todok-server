import { Response } from "express";
import { IResponseData } from "../interfaces";

const sendResponse = <T>(res: Response, data: IResponseData<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
