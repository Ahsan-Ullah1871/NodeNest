#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
console.log("Initializing Portfolio Backend Template...");
(0, child_process_1.execSync)("npx degit yourusername/portfolio-backend-template my-project", {
    stdio: "inherit",
});
