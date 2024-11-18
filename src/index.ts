#!/usr/bin/env node
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";

const projectName = process.argv[2];

// Validate project name
const validateProjectName = (name: string): boolean => {
	const validation = /^[a-zA-Z0-9-_]+$/;
	return validation.test(name);
};

// Show help message
const showHelp = () => {
	console.log(`
${chalk.blue("AH Starter Kit - Project Generator")}

${chalk.yellow("Usage:")}
  ${chalk.green("npx")} NodeNest ${chalk.cyan("<project-name>")}

${chalk.yellow("Example:")}
  ${chalk.green("npx")} NodeNest ${chalk.cyan("my-awesome-api")}

${chalk.yellow("Options:")}
  ${chalk.cyan("project-name")}    Name of your project (Required)
    `);
};

// Main initialization function
const initializeProject = async () => {
	try {
		// Check if project name is provided
		if (!projectName) {
			console.error(
				chalk.red(
					"❌ Error: Please specify the project name"
				)
			);
			showHelp();
			process.exit(1);
		}

		// Validate project name
		if (!validateProjectName(projectName)) {
			console.error(
				chalk.red(
					"❌ Error: Project name can only contain letters, numbers, dashes and underscores"
				)
			);
			process.exit(1);
		}

		// Check if directory already exists
		if (fs.existsSync(projectName)) {
			console.error(
				chalk.red(
					`❌ Error: Directory ${projectName} already exists`
				)
			);
			process.exit(1);
		}

		// Create project directory
		console.log(
			chalk.blue(
				`\n🚀 Creating a new AH Starter Kit project in ${chalk.green(
					projectName
				)}...\n`
			)
		);
		fs.mkdirSync(projectName);

		// Clone the repository
		console.log(chalk.cyan("📥 Downloading template..."));
		execSync(
			`git clone --depth 1 https://github.com/Ahsan-Ullah1871/NodeNest.git ${projectName}`,
			{ stdio: "inherit" }
		);

		// Change directory
		process.chdir(path.join(process.cwd(), projectName));

		// Remove .git folder
		console.log(chalk.cyan("🧹 Cleaning up template..."));
		fs.rmSync(path.join(process.cwd(), ".git"), {
			recursive: true,
			force: true,
		});

		// Initialize new git repository
		console.log(chalk.cyan("🔧 Initializing git repository..."));
		execSync("git init", { stdio: "inherit" });

		// Install dependencies
		console.log(chalk.cyan("📦 Installing dependencies...\n"));
		execSync("npm install", { stdio: "inherit" });

		// Setup complete
		console.log(
			chalk.green("\n✨ Success! Your project is ready!\n")
		);
		console.log(chalk.cyan("To get started:"));
		console.log(chalk.yellow(`\n  cd ${projectName}`));
		console.log(chalk.yellow("  npm run dev\n"));

		console.log(chalk.cyan("Available commands:"));
		console.log(
			chalk.yellow("  npm run dev") +
				"      - Start development server"
		);
		console.log(
			chalk.yellow("  npm run build") +
				"    - Build for production"
		);
		console.log(
			chalk.yellow("  npm run start") +
				"    - Start production server"
		);
		console.log(
			chalk.yellow("  npm run lint") + "     - Check linting\n"
		);

		console.log(chalk.blue("Happy coding! 🎉\n"));
	} catch (error) {
		console.error(chalk.red("\n❌ Error occurred:"));
		if (error instanceof Error) {
			console.error(chalk.red(error.message));
		} else {
			console.error(chalk.red("An unknown error occurred"));
		}

		// Cleanup on error
		if (fs.existsSync(projectName)) {
			console.log(chalk.yellow("\n🧹 Cleaning up..."));
			fs.rmSync(path.join(process.cwd(), projectName), {
				recursive: true,
				force: true,
			});
		}

		process.exit(1);
	}
};

// Run initialization
initializeProject().catch((error) => {
	console.error(chalk.red("Fatal Error:"), error);
	process.exit(1);
});

