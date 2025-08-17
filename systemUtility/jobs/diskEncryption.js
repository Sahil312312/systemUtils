const { exec } = require("child_process");

function checkDiskEncryption() {
  return new Promise((resolve) => {
    exec("lsblk -o NAME,TYPE,MOUNTPOINT | grep -i crypt", (err, stdout) => {
      resolve(stdout.trim() !== ""); // true if encrypted
    });
  });
}

module.exports = { checkDiskEncryption };
