const dotenv = require("dotenv");
dotenv.config({ path: ".env.production" });



exports.SERVICE_NAME = process.env.SERVICE_NAME.trim();
exports.LOOP_INTERVAL = process.env.LOOP_INTERVAL.trim();
// exports.API_URL = process.env.API_URL
exports.API_URL = process.env.API_URL.trim();
exports.API_SECRET = process.env.API_SECRET.trim();
