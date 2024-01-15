import express, { Router } from "express";
import { todoRoutes } from "../modules/todo/todo.route";

const router = express.Router();

interface TRoute {
  path: string;
  router: Router;
}

const moduleRoutes: TRoute[] = [
  {
    path: "/tasks",
    router: todoRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
