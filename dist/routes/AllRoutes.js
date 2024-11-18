"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../app/modules/blogs/routes");
const AllRouter = express_1.default.Router();
const all_routes = [{ path: "/blogs", router: routes_1.BlogsRoutes }];
all_routes.map((item) => AllRouter.use(item.path, item.router));
exports.default = AllRouter;
