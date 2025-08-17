const { exec } = require("child_process");

function checkSleepSettings() {
  return new Promise((resolve) => {
    exec(
      "loginctl show-session $(loginctl | grep $(whoami) | awk '{print $1}') -p IdleHint -p IdleSinceHint",
      (err, stdout) => {
        if (err || !stdout) return resolve(-1);

        // Parse the output
        const lines = stdout.trim().split("\n");
        const idleHint = lines
          .find((l) => l.startsWith("IdleHint="))
          ?.split("=")[1];
        const idleSince = Number(
          lines.find((l) => l.startsWith("IdleSinceHint="))?.split("=")[1] || 0
        );

        // If IdleHint=yes, convert seconds to minutes
        const idleMinutes = idleHint === "yes" ? Math.floor(idleSince / 60) : 0;
        resolve(idleMinutes);
      }
    );
  });
}

module.exports = { checkSleepSettings };
