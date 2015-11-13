#!/usr/bin/env node

var ip = process.env.SSH_CONNECTION.split(" ")[2];
var execSync = require("child_process").execSync;
execSync("jekyll serve --host " + ip + " --port 80", { stdio: "inherit" });
