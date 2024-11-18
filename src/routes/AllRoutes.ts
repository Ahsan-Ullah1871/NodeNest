import express from "express";
import { BlogsRoutes } from "../app/modules/blogs/routes";
const AllRouter = express.Router();

const all_routes = [{ path: "/blogs", router: BlogsRoutes }];

all_routes.map((item) => AllRouter.use(item.path, item.router));

export default AllRouter;

