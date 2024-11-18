import { Request, Response } from "express";
import { BlogServices } from "./services";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import { pagination_keys } from "../../../constant/common";
import httpStatus from "http-status";
import { blogs_filter_keys } from "./constant";
import STRINGS from "../../../constant/Strings";

// getAllBlogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
	const filers = pick(req.query, blogs_filter_keys);
	const pagination = pick(req.query, pagination_keys);

	const results = await BlogServices.get_all_blogs(filers, pagination);

	//
	sendResponse(res, {
		status_code: httpStatus.OK,
		data: results?.data,
		message: STRINGS.blogs.get,
		success: true,
		meta: results?.meta,
	});
});

// create
const createBlog = catchAsync(async (req: Request, res: Response) => {
	const { ...blog_data } = req.body;

	const result = await BlogServices.create_new_blog(blog_data);

	sendResponse(res, {
		status_code: httpStatus.OK,
		data: result,
		message: STRINGS.blogs.post,
		success: true,
	});
});

// edit
const editBlog = catchAsync(async (req: Request, res: Response) => {
	const { id: blog_id } = req.params;
	const { ...blog_data } = req.body;

	const result = await BlogServices.edit_blog(blog_id, blog_data);

	sendResponse(res, {
		status_code: httpStatus.OK,
		data: result,
		message: STRINGS.blogs.patch,
		success: true,
	});
});

// edit
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
	const { id: blog_id } = req.params;

	const result = await BlogServices.delete_blog(blog_id);

	sendResponse(res, {
		status_code: httpStatus.OK,
		data: result,
		message: STRINGS.blogs.delete,
		success: true,
	});
});

export const BlogsController = {
	getAllBlogs,
	createBlog,
	editBlog,
	deleteBlog,
};

