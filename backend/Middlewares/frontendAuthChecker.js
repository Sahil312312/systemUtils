const { DAEMON_AUTH_HEADER, FRONTEND_AUTH_HEADER } = require("../ENV/env");
const catchAsync = require("../Utils/catchAsync");

const frontend_auth_checker = catchAsync(async (req, res, next) => {
  if (req.headers.authorization !== `Bearer ${FRONTEND_AUTH_HEADER}`) {
    return res.status(401).json({
      status: false,
      mssg: "Unauthorized Frontend Request. ",
    });
  }
  next();
});

module.exports = frontend_auth_checker;
