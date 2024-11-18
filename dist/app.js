"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const AllRoutes_1 = __importDefault(require("./routes/AllRoutes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Application routes
app.use("/api/v1/", AllRoutes_1.default);
// testing
app.get("/", (req, res) => {
    res.send("Hello world");
});
// Global error
app.use(globalErrorHandler_1.default);
// Undefined error
app.use((req, res, next) => {
    const error_data = {
        success: false,
        message: "NOT FOUND",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "Api not found ",
            },
        ],
    };
    res.status(http_status_1.default.NOT_FOUND).json(error_data);
    next();
});
exports.default = app;
