/* eslint-disable no-unused-vars */
import { RequestHandler } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFoundRoute: RequestHandler = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `Route Not Exists 🥵!!!`,
    data: null,
  });
};

export default notFoundRoute;
