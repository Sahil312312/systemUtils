let consts = require("../config/consts");

function hasChanged(newObj) {
  if (JSON.stringify(consts.systemData) !== JSON.stringify(newObj)) {
    consts.systemData = newObj;
    return true;
  }
  return false;
}

module.exports = { hasChanged };
