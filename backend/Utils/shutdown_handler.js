const { get_current_date_time } = require("./time");

class ShutdownHandler {
  constructor() {
    this.cleanupFunction = [];
    this.endCleanupFunction = [];
    process.on("SIGINT", () => this.shutdown("SIGINT"));
    process.on("SIGTERM", () => this.shutdown("SIGTERM"));
    process.on("unhandledRejection", (reason, promise) => {
      console.error(
        `${get_current_date_time()} | ERROR | Unhandled Rejection at: ${promise} reason: ${reason}`
      );
      this.shutdown("unhandledRejection");
    });
    process.on("uncaughtException", (error) => {
      console.error(
        `${get_current_date_time()} | ERROR | Uncaught Exception: ${
          error.message
        }`,
        error.stack
      );
      this.shutdown("uncaughtException");
    });
  }

  registerCleanupFunction(fn, end = false) {
    end ? this.endCleanupFunction.push(fn) : this.cleanupFunction.push(fn);
  }

  async shutdown(signal) {
    if (["unhandledRejection", "uncaughtException", "SIGTERM"].includes(signal))
      console.log("unhandled error");

    for (const fn of this.cleanupFunction) {
      await fn();
    }

    for (const fn of this.endCleanupFunction) {
      await fn();
    }

    process.exit(
      signal === "unhandledRejection" || signal === "uncaughtException" ? 1 : 0
    );
  }
}

module.exports = new ShutdownHandler();
