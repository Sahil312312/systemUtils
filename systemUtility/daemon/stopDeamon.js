//Logic for freeing up resources

const { log } = require("../utils/logger");
let consts = require("./../config/consts");

function stopDeamon(code = 0) {
  if (consts.loop) {
    clearInterval(consts.loop);
    consts.loop = null;
  }

  log("Deamon Stopped Gracefully");
  process.exit(code);
}

module.exports = stopDeamon;
