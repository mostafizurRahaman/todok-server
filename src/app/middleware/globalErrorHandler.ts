/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
  const message: string = "Something went wrong!!!";
  const errSource = "";

  res.status(statusCode).send({
    success: false,
    message,
    errSource: errSource,
    stack: err.stack,
  });
};

export default globalErrorHandler;
