const express = require("express");
const daemon_auth_checker = require("../Middlewares/daemonAuthCheck");
const { setSystemUtils, geteSystemUtils, getSystemUtilsFilteredData, getSystemUtils } = require("../Controller/systemUtiliesController");
const { FRONTEND_AUTH_HEADER } = require("../ENV/env");
const frontend_auth_checker = require("../Middlewares/frontendAuthChecker");

const Router = express.Router();

Router.post("/healthCheckData", daemon_auth_checker, setSystemUtils);
Router.post("/healthCheckfilteredData", frontend_auth_checker, getSystemUtilsFilteredData);


module.exports = Router;
