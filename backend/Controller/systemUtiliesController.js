const MachineUtils = require("../Model/machineDataModel");
const appError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");

exports.setSystemUtils = catchAsync(async (req, res, next) => {
  const {
    machineId,
    checkOSUpdate,
    checkDiskEncryption,
    checkAntivirus,
    checkSleepSettings,
    timestamp,
  } = req.body;

  const resp = await MachineUtils.findOneAndUpdate(
    { machineId },
    {
      machineId,
      checkAntivirus,
      checkDiskEncryption,
      checkSleepSettings,
      checkOSUpdate,
      utilsTime: timestamp,
      os: "linux",
    },
    { upsert: true }
  );

  res.status(200).json({
    status: true,
  });
});

exports.getSystemUtilsFilteredData = catchAsync(async (req, res, next) => {
  const {
    flags = {},
    sorting = {},
    filter = {},
    page = 1,
    limit = 10,
  } = req.body;

  const pageNumber = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = parseInt(pageNumber - 1) * limitNum;

  let query = { ...flags, ...filter };

  let data = await MachineUtils.find(query)
    .sort(sorting)
    .skip(skip)
    .limit(limitNum);

  const total = await MachineUtils.countDocuments(query);

  res.status(200).json({
    status: true,
    data,
    pagination: {
      total,
      page: pageNumber,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    },
  });
});
