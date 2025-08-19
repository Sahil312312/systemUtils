const http = require("http"); // if API_URL is https://
const { apiObj } = require("./apiObj");
const { API_URL, API_SECRET } = require("../config/Env");
const { hasChanged } = require("../utils/objChangeChecker");
const stopDeamon = require("../daemon/stopDeamon");
const { log } = require("console");

async function sendSystemData() {
  let newSystemData = await apiObj();

  if (!hasChanged(newSystemData)) return;
  newSystemData = { ...newSystemData, timeStamp: new Date().toISOString() };

  const data = JSON.stringify(newSystemData);
  const url = new URL(API_URL);

  const options = {
    hostname: url.hostname,
    path: url.pathname,
    port: url.port,
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_SECRET}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(data),
    },
  };

  console.log(options);

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = "";
      console.log(res);
      res.on("data", (chunks) => (body += chunks));

      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          log(`Successfully sent to backend!`);
          resolve(body);
        } else {
          log(
            `Error while sending data to backend | statusCode : ${res.statusCode} | Reason : ${body}`
          );
          reject(new Error(`Request failed ${res.statusCode}`));
          stopDeamon();
        }
      });
    });

    // req.setTimeout(5000);
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timeout"));
      stopDeamon();
    });

    req.write(data);
    req.end();
  });
}

module.exports = { sendSystemData };
