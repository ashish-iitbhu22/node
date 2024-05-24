const mongoose = require("mongoose");

const userScheme = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const userDb = mongoose.model("user", userScheme);

module.exports = userDb;
