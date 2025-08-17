const { DAEMON_AUTH_HEADER } = require("../ENV/env");
const catchAsync = require("../Utils/catchAsync");

const daemon_auth_checker = catchAsync(async (req, res, next) => {
  if (req.headers.authorization !== `Bearer ${DAEMON_AUTH_HEADER}`) {
    return res.status(401).json({
      status: false,
      mssg: "Unauthorized Daemon.",
    });
  }
  next();
});

module.exports = daemon_auth_checker;
