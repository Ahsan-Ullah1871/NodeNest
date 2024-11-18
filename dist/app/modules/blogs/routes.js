"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get("/", controller_1.BlogsController.getAllBlogs);
router.post("/create");
router.patch("/edit/:id");
router.delete("/delete/:id", controller_1.BlogsController.deleteBlog);
exports.BlogsRoutes = router;
