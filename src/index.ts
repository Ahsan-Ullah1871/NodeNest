#!/usr/bin/env node
import { execSync } from "child_process";

console.log("Initializing Portfolio Backend Template...");
execSync("npx degit yourusername/portfolio-backend-template my-project", {
  stdio: "inherit",
});