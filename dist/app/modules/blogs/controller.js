"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsController = void 0;
const services_1 = require("./services");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const common_1 = require("../../../constant/common");
const http_status_1 = __importDefault(require("http-status"));
const constant_1 = require("./constant");
const Strings_1 = __importDefault(require("../../../constant/Strings"));
// getAllBlogs
const getAllBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filers = (0, pick_1.default)(req.query, constant_1.blogs_filter_keys);
    const pagination = (0, pick_1.default)(req.query, common_1.pagination_keys);
    const results = yield services_1.BlogServices.get_all_blogs(filers, pagination);
    //
    (0, sendResponse_1.default)(res, {
        status_code: http_status_1.default.OK,
        data: results === null || results === void 0 ? void 0 : results.data,
        message: Strings_1.default.blogs.get,
        success: true,
        meta: results === null || results === void 0 ? void 0 : results.meta,
    });
}));
// create
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog_data = __rest(req.body, []);
    const result = yield services_1.BlogServices.create_new_blog(blog_data);
    (0, sendResponse_1.default)(res, {
        status_code: http_status_1.default.OK,
        data: result,
        message: Strings_1.default.blogs.post,
        success: true,
    });
}));
// edit
const editBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: blog_id } = req.params;
    const blog_data = __rest(req.body, []);
    const result = yield services_1.BlogServices.edit_blog(blog_id, blog_data);
    (0, sendResponse_1.default)(res, {
        status_code: http_status_1.default.OK,
        data: result,
        message: Strings_1.default.blogs.patch,
        success: true,
    });
}));
// edit
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: blog_id } = req.params;
    const result = yield services_1.BlogServices.delete_blog(blog_id);
    (0, sendResponse_1.default)(res, {
        status_code: http_status_1.default.OK,
        data: result,
        message: Strings_1.default.blogs.delete,
        success: true,
    });
}));
exports.BlogsController = {
    getAllBlogs,
    createBlog,
    editBlog,
    deleteBlog,
};
