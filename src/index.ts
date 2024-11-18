#!/usr/bin/env node
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const projectName = process.argv[2];

if (!projectName) {
	console.error("Please specify the project name");
	process.exit(1);
}

console.log(`Creating a new NodeNest project in ${projectName}...`);

try {
	// Create project directory
	fs.mkdirSync(projectName);

	// Clone the repository
	execSync(
		`git clone --depth 1 https://github.com/Ahsan-Ullah1871/NodeNest.git ${projectName}`,
		{ stdio: "inherit" }
	);

	// Remove .git folder
	fs.rmSync(path.join(process.cwd(), projectName, ".git"), {
		recursive: true,
		force: true,
	});

	console.log("Installation completed successfully!");
	console.log(`\nGet started with the following commands:\n`);
	console.log(`cd ${projectName}`);
	console.log("npm install");
	console.log("npm run dev");
} catch (error) {
	console.error("Error:", error);
	process.exit(1);
}

