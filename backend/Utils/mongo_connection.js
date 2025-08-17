const mongoose = require("mongoose");
const { DB_URL, DB_NAME } = require("../ENV/env");
const { get_current_date_time } = require("./time");
const logger = require("./logger");
const shutdown_handler = require("./shutdown_handler");

let connection;

async function connect_to_db() {

  mongoose
    .connect(DB_URL)
    .then((con) => {
      connection = con;
      logger.info("Database Connected...");
    })
    .catch((err) => {
      logger.info(err);
      logger.notify("Database Connection failed");
    });
}

async function close_db_connection() {
  if (connection) {
    try {
      await mongoose.connection.close();
      logger.info("Database Connection Closed.");
    } catch (err) {
      logger.info(err);
      logger.notify("Database Failed to disconnect");
    }
  }
}

shutdown_handler.registerCleanupFunction(
  async () => await close_db_connection(),
  true
);

module.exports = connect_to_db;
