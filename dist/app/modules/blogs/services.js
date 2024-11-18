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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
// get
const get_all_blogs = (filers, pagination_data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        meta: {
            page: 1,
            size: 10,
            total: 112,
            totalPage: 20,
        },
        data: [],
    };
});
// Post
const create_new_blog = (blog_data) => __awaiter(void 0, void 0, void 0, function* () {
    // Image checking
    return null;
});
// patch
const edit_blog = (blog_id, blog_data) => __awaiter(void 0, void 0, void 0, function* () {
    // blog   checking
    return null;
});
// delete
const delete_blog = (blog_id) => __awaiter(void 0, void 0, void 0, function* () {
    return null;
});
exports.BlogServices = {
    get_all_blogs,
    create_new_blog,
    edit_blog,
    delete_blog,
};
