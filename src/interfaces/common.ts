 

export type IMeta = {
	page: number;
	size: number;
	total: number;
	totalPage: number;
};

export type GenericResponse<T> = {
	meta?: IMeta;
	data: T;
};

