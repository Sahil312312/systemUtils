const { exec } = require("child_process");

function checkOSUpdate() {
  return new Promise((resolve) => {
    exec("apt list --upgradable 2>/dev/null | wc -l", (err, stdout) => {
      resolve(Number(stdout.trim()) === 0); // true if OS up-to-date
    });
  });
}

module.exports = { checkOSUpdate };
