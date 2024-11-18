import express from "express";
import { BlogsController } from "./controller";

const router = express.Router();

router.get("/", BlogsController.getAllBlogs);

router.post("/create");

router.patch("/edit/:id");

router.delete("/delete/:id", BlogsController.deleteBlog);

export const BlogsRoutes = router;

