const { getMAC } = require("../utils/getMacAddress");

exports.systemData = null;
exports.loop = null
exports.TIMEOUT_INTERVAL=600000;
exports.MACAddress = getMAC();