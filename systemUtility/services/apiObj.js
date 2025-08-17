const { log } = require("../utils/logger");
const { checkDiskEncryption } = require("../jobs/diskEncryption");
const { checkOSUpdate } = require("../jobs/osUpdate");
const { checkAntivirus } = require("../jobs/antiVirus");
const { checkSleepSettings } = require("../jobs/sleepSettings");
const { getMAC } = require("../utils/getMacAddress");
const { MACAddress } = require("../config/consts");
const { timeStamp } = require("console");


async function apiObj() {
  let obj = {
    checkOSUpdate: await checkOSUpdate(),
    checkDiskEncryption: await checkDiskEncryption(),
    checkAntivirus: await checkAntivirus(),
    checkSleepSettings: await checkSleepSettings(),
    machineId: MACAddress,
  };

  log(JSON.stringify(obj, null, 2)); // Pretty-print JSON

  return obj;
}

module.exports = {  apiObj };
