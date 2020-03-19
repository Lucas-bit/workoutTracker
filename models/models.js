
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userLogSchema = new Schema({

  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number  //removed required from weight, reps, sets, and duration
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
},
 {
  toJSON: {
    // include any virtual properties when data is requested
    virtuals: true
  }
}
);

// adds a dynamically-created property to schema
userLogSchema.virtual("totalDuration").get(function() {
// "reduce" array of exercises down to just the sum of their durations
return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration;
}, 0);
});

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

const Workout = mongoose.model("Workout", userLogSchema);

module.exports = Workout;


