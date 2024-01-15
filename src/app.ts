import express, { Request, Response } from "express";
import cors from "cors";
import notFoundRoute from "./app/middleware/notFoundRoute";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import sendResponse from "./app/utils/sendResponse";
import httpStatus from "http-status";

const app = express();

// ** all application level middlewares:
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
   
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Yah!! our server runnin successfully!!! ☺️",
    data: null,
  });
});

// ** all routes are here:

// ** globalErrorHandler:
app.use(globalErrorHandler);
// ** notFound Route :
app.use(notFoundRoute);

export default app;
