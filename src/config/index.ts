/* eslint-disable no-undef */
import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	node_env: process.env.NODE_ENV,
	port: process.env.PORT,
};

