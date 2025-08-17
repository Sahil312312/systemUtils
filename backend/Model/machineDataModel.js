const mongoose = require("mongoose");

const machineDataSchema = new mongoose.Schema(
  {
    machineId: {
      type: String,
      required: [true, "Please provide a machienId"],
      unique: [true, "Required unique machineId"],
      match: [
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
        "Invalid MAC address format",
      ],
    },
    os: {
      type: String,
      enum: {
        values: ["windows", "linux", "macOs"],
        message: "{VALUE} is not a supported OS",
      },
    },
    utilsTime: {
      type: String,
      required: [true, "Please provide a timestamp"],
      validate: {
        validator: function (timestamp) {
          return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(
            timestamp
          );
        },
        message: (props) => `${props.value} is not a valid format of timestamp`,
      },
    },
    checkOSUpdate: {
      type: Boolean,
      required: [true, "Please provide OSupdate Info"],
    },
    checkDiskEncryption: {
      type: Boolean,
      required: [true, "Please provide checkDiskEncryption Info"],
    },
    checkAntivirus: {
      type: Boolean,
      required: [true, "Please provide checkAntivirus Info"],
    },
    checkSleepSettings: {
      type: Number,
      required: [true, "Please provide checkSleepSettings Info"],
    },
  },
  {
    timestamps: true,
  }
);

// machineDataSchema.index({ machineId: 1 });

const MachineUtils = mongoose.model("MachineUtils", machineDataSchema);
module.exports = MachineUtils;
