/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from "express";
import { error_res_type, generic_error_type } from "../../interfaces/error";
import ApiError from "../errors/ApiError";

const global_error_handler: ErrorRequestHandler = (error, req, res, next) => {
	let status_code = 500;
	let message = "Something went wrong";
	let errorMessages: generic_error_type[] = [];

	if (error instanceof ApiError) {
		status_code = error.statusCode;
		message = "Api Connection error";
		errorMessages = error.message
			? [{ path: "", message: error.message }]
			: [];
	} else if (error instanceof Error) {
		message = "Internal error";
		errorMessages = error.message
			? [{ path: "", message: error.message }]
			: [];
	}

	//  error response sending....

	const error_resp: error_res_type = {
		success: false,
		message,
		errorMessages,
		stack: error?.stack,
	};

	res.status(status_code).json(error_resp);
};
export default global_error_handler;

