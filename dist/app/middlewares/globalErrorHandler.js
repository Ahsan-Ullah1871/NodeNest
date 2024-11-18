"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const global_error_handler = (error, req, res, next) => {
    let status_code = 500;
    let message = "Something went wrong";
    let errorMessages = [];
    if (error instanceof ApiError_1.default) {
        status_code = error.statusCode;
        message = "Api Connection error";
        errorMessages = error.message
            ? [{ path: "", message: error.message }]
            : [];
    }
    else if (error instanceof Error) {
        message = "Internal error";
        errorMessages = error.message
            ? [{ path: "", message: error.message }]
            : [];
    }
    //  error response sending....
    const error_resp = {
        success: false,
        message,
        errorMessages,
        stack: error === null || error === void 0 ? void 0 : error.stack,
    };
    res.status(status_code).json(error_resp);
};
exports.default = global_error_handler;
