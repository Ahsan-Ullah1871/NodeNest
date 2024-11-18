import { Response } from "express";

interface ISendResponse<D, M> {
	status_code: number;
	message: string;
	success: boolean;
	data?: D | null;
	meta?: M | null;
}

const sendResponse = <D, M>(res: Response, data: ISendResponse<D, M>): void => {
	res.status(data.status_code).json(data);
};

export default sendResponse;
