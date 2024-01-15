import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        cookie: req.cookies,
      });
      next();
    } catch (err) {
      next(err);
    }
  });
};

export default validateRequest;
