
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userLogSchema = new Schema({

  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      exerciseType: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },
      duration: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
      sets: {
        type: Number,
        required: true
      }
    }
  ]
},
);

// const userLogSchema = new Schema({
  

//   day: {
//     type: Date,
//     default: Date.now
//   },

//   exerciseType: {
//     type: String, //not sure here
//     trim: true,
//   },

//   weight: {
//     type: Number,
//     requried: true,
//     trim: true
//   },

//   sets: {
//     type: Number,
//     requried: true,
//     trim: true
//   },

//   reps: {
//     type: Number,
//     requried: true,
//     trim: true
//   },

//   duration: {
//     type: Number,
//     requried: true,
//   },

//   exercises: [],
// });

const userLog = mongoose.model("User", userLogSchema);

module.exports = userLog;


