const winston = require("winston");
const { LOG_LEVEL, LEVEL } = require("../Consts/logger_constants");
const { get_current_time, get_current_date } = require("./time");
const { ENVIROMENT } = require("../ENV/env");
const fs = require("fs");
const DBTransport = require("./mongo_transport");

if (!fs.existsSync("./Logs")) {
  fs.mkdirSync("./Logs");
}

const custom_format = winston.format.printf(({ level, message }) => {
  return `${get_current_date()} - ${get_current_time()} | ${level.toUpperCase()} |  ${message}`;
});

const console_filter = winston.format((info) => {
  const levelsToSkip = ["notify", "request", "api", "db","notifylog","error"];
  if (levelsToSkip.includes(info.level)) {
    return false;
  }

  return info;
});

const db_transporter = new DBTransport();

const logger = winston.createLogger({
  levels: LOG_LEVEL,
  level: LEVEL,
  format: winston.format.combine(custom_format),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(console_filter(), custom_format)
    }),
    db_transporter
  ]
});

module.exports = logger;
