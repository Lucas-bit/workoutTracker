const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userLogSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise: {
    type: String, //not sure here
    required: true,
    trim: true,
  }
});

const userLog = mongoose.model("User", userLogSchema);

module.exports = userLog;


