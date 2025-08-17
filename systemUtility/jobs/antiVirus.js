const { exec } = require("child_process");

function checkAntivirus() {
  return new Promise((resolve) => {
    exec("systemctl is-active clamav-daemon", (err, stdout) => {
      resolve(stdout.trim() === "active");
    });
  });
}

module.exports = { checkAntivirus };
