let consts = require("../config/consts");
const { LOOP_INTERVAL } = require("../config/Env");
const { sendSystemData } = require("../services/requestHandler");
const { apiObj } = require("../services/apiObj");
const exitSignalRegister = require("../utils/exitSignalRegister");
const { log } = require("../utils/logger");

async function startDeamon() {
  log("Daemon started...");

  consts.systemData = await apiObj();

  consts.loop = setInterval(() => {
    sendSystemData();
  }, LOOP_INTERVAL);

  exitSignalRegister();

  
}

module.exports = startDeamon;
