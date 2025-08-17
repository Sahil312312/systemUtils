const os = require("os");

exports.getMAC = () => {
  let interfaces = os.networkInterfaces();
  for (let name of Object.keys(interfaces)) {
    for (let iface of interfaces[name]) {
      if (!iface.internal && iface.mac !== "00:00:00:00:00:00")
        return iface.mac;
    }
  }
  return null;
};
