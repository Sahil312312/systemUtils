const dotenv = require("dotenv");
const fs = require("fs");
const os = require("os");
let env_file = `.env.${process.env.NODE_ENV}`;

if (fs.existsSync(env_file)) {
  dotenv.config({ path: env_file });
} else {
  dotenv.config();

  console.log(
    `${
      process.env.NODE_ENV
        ? process.env.NODE_ENV + " file is missing"
        : "No environment configured"
    } , loading default file`
  );
}

function getInternalIp() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const interface of interfaces[interfaceName]) {
      if (interface.family === "IPv4" && !interface.internal) {
        return interface.address;
      }
    }
  }
  return null;
}

exports.INTERNAL_IP = getInternalIp().trim();

exports.SERVICE_NAME = process.env.SERVICE_NAME.trim();
exports.PORT = process.env.PORT.trim();
exports.ENVIROMENT = process.env.NODE_ENV.trim();

exports.DB_URL = process.env.DB_URL.trim();
exports.DB_NAME = process.env.DB_NAME.trim();

exports.LOG_DB_URI = process.env.LOG_DB_URI.trim();
exports.LOG_DB_NAME = process.env.LOG_DB_NAME.trim();
exports.LOG_COLLECTION_NAME = process.env.LOG_COLLECTION_NAME.trim();
exports.LOG_BATCH_SIZE = process.env.LOG_BATCH_SIZE.trim();
exports.LOG_INTERVAL = process.env.LOG_INTERVAL.trim();

exports.DAEMON_AUTH_HEADER = process.env.DAEMON_AUTH_HEADER.trim();
exports.FRONTEND_AUTH_HEADER = process.env.FRONTEND_AUTH_HEADER.trim();

