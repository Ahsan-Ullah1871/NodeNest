import { GenericResponse } from "../../../interfaces/common";

import { IBlogsFilter } from "./interface";
import { IPagination } from "../../../interfaces/pagination";
import { IBlog } from "../../../interfaces/Blogs";

// get
const get_all_blogs = async (
	filers: Partial<IBlogsFilter>,
	pagination_data: Partial<IPagination>
): Promise<GenericResponse<Array<IBlog> | null>> => {
	console.log({ filers, pagination_data });
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
	console.log(blog_data);
	// Image checking

	return null;
};

// patch
const edit_blog = async (
	blog_id: string,
	blog_data: Partial<IBlog>
): Promise<IBlog | null> => {
	// blog   checking
	console.log({ blog_data, blog_id });

	return null;
};

// delete
const delete_blog = async (blog_id: string): Promise<IBlog | null> => {
	console.log({ blog_id });

	return null;
};

export const BlogServices = {
	get_all_blogs,
	create_new_blog,
	edit_blog,
	delete_blog,
};

