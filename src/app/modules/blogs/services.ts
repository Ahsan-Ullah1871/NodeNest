import { GetWhereConditions } from "./condition";

import { GenericResponse } from "../../../interfaces/common";

import httpStatus from "http-status";

import { IBlogsFilter } from "./interface";
import { IPagination } from "../../../interfaces/pagination";
import { IBlog } from "../../../interfaces/Blogs";

// get
const get_all_blogs = async (
	filers: Partial<IBlogsFilter>,
	pagination_data: Partial<IPagination>
): Promise<GenericResponse<Array<IBlog> | null>> => {
	return {
		meta: {
			page: 1,
			size: 10,
			total: 112,
			totalPage: 20,
		},
		data: [],
	};
};

// Post
const create_new_blog = async (blog_data: IBlog): Promise<IBlog | null> => {
	// Image checking

	return null;
};

// patch
const edit_blog = async (
	blog_id: string,
	blog_data: Partial<IBlog>
): Promise<IBlog | null> => {
	// blog   checking

	return null;
};

// delete
const delete_blog = async (blog_id: string): Promise<IBlog | null> => {
	return null;
};

export const BlogServices = {
	get_all_blogs,
	create_new_blog,
	edit_blog,
	delete_blog,
};

