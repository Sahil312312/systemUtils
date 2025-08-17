const stopDeamon = require("../daemon/stopDeamon");
const { log } = require("./logger");

function exitSignalRegister() {
  process.on("SIGINT", () => {
    stopDeamon(0);
  }); //ctrl+c
  process.on("SIGTERM", () => {
    stopDeamon(0);
  }); //kill signal
  process.on("uncaughtException", (err) => {
    log(`Uncaught Exception: ${err.message}`);
    stopDeamon(1);
  });
  process.on("unhandledRejection", (reason) => {
    log(`Unhandled Rejection: ${reason}`);
    stopDeamon(1);
  });
}

module.exports = exitSignalRegister;
