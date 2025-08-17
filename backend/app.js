const express = require("express");
const app = express();
const logger = require("./Utils/logger");
const systemUtilsRoute = require("./Routes/systemUtilsRoute");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/api/v1/healthCheck", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Health is OK",
  });
});

app.use("/api/v1/systemUtils", systemUtilsRoute);

app.all("*", (req, res, next) => {
  console.log("NOT FOUND");
});

module.exports = app;
