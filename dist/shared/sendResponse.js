"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.status(data.status_code).json(data);
};
exports.default = sendResponse;
