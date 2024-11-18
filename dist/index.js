#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const projectName = process.argv[2];
// Validate project name
const validateProjectName = (name) => {
    const validation = /^[a-zA-Z0-9-_]+$/;
    return validation.test(name);
};
// Show help message
const showHelp = () => {
    console.log(`
${chalk_1.default.blue("AH Starter Kit - Project Generator")}

${chalk_1.default.yellow("Usage:")}
  ${chalk_1.default.green("npx")} NodeNest ${chalk_1.default.cyan("<project-name>")}

${chalk_1.default.yellow("Example:")}
  ${chalk_1.default.green("npx")} NodeNest ${chalk_1.default.cyan("my-awesome-api")}

${chalk_1.default.yellow("Options:")}
  ${chalk_1.default.cyan("project-name")}    Name of your project (Required)
    `);
};
// Main initialization function
const initializeProject = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if project name is provided
        if (!projectName) {
            console.error(chalk_1.default.red("❌ Error: Please specify the project name"));
            showHelp();
            process.exit(1);
        }
        // Validate project name
        if (!validateProjectName(projectName)) {
            console.error(chalk_1.default.red("❌ Error: Project name can only contain letters, numbers, dashes and underscores"));
            process.exit(1);
        }
        // Check if directory already exists
        if (fs.existsSync(projectName)) {
            console.error(chalk_1.default.red(`❌ Error: Directory ${projectName} already exists`));
            process.exit(1);
        }
        // Create project directory
        console.log(chalk_1.default.blue(`\n🚀 Creating a new AH Starter Kit project in ${chalk_1.default.green(projectName)}...\n`));
        fs.mkdirSync(projectName);
        // Clone the repository
        console.log(chalk_1.default.cyan("📥 Downloading template..."));
        (0, child_process_1.execSync)(`git clone --depth 1 https://github.com/Ahsan-Ullah1871/NodeNest.git ${projectName}`, { stdio: "inherit" });
        // Change directory
        process.chdir(path.join(process.cwd(), projectName));
        // Remove .git folder
        console.log(chalk_1.default.cyan("🧹 Cleaning up template..."));
        fs.rmSync(path.join(process.cwd(), ".git"), {
            recursive: true,
            force: true,
        });
        // Initialize new git repository
        console.log(chalk_1.default.cyan("🔧 Initializing git repository..."));
        (0, child_process_1.execSync)("git init", { stdio: "inherit" });
        // Install dependencies
        console.log(chalk_1.default.cyan("📦 Installing dependencies...\n"));
        (0, child_process_1.execSync)("npm install", { stdio: "inherit" });
        // Setup complete
        console.log(chalk_1.default.green("\n✨ Success! Your project is ready!\n"));
        console.log(chalk_1.default.cyan("To get started:"));
        console.log(chalk_1.default.yellow(`\n  cd ${projectName}`));
        console.log(chalk_1.default.yellow("  npm run dev\n"));
        console.log(chalk_1.default.cyan("Available commands:"));
        console.log(chalk_1.default.yellow("  npm run dev") +
            "      - Start development server");
        console.log(chalk_1.default.yellow("  npm run build") +
            "    - Build for production");
        console.log(chalk_1.default.yellow("  npm run start") +
            "    - Start production server");
        console.log(chalk_1.default.yellow("  npm run lint") + "     - Check linting\n");
        console.log(chalk_1.default.blue("Happy coding! 🎉\n"));
    }
    catch (error) {
        console.error(chalk_1.default.red("\n❌ Error occurred:"));
        if (error instanceof Error) {
            console.error(chalk_1.default.red(error.message));
        }
        else {
            console.error(chalk_1.default.red("An unknown error occurred"));
        }
        // Cleanup on error
        if (fs.existsSync(projectName)) {
            console.log(chalk_1.default.yellow("\n🧹 Cleaning up..."));
            fs.rmSync(path.join(process.cwd(), projectName), {
                recursive: true,
                force: true,
            });
        }
        process.exit(1);
    }
});
// Run initialization
initializeProject().catch((error) => {
    console.error(chalk_1.default.red("Fatal Error:"), error);
    process.exit(1);
});
