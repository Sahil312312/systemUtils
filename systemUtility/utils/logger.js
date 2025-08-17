const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/app.log");

function log(message) {
  let timestamp = new Date().toISOString();
  let finalMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFilePath, finalMessage);
  console.log(finalMessage.trim());
}

module.exports = { log };
