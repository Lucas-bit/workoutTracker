const express = require("express");
const logger = require("morgan");
const mongojs = require('mongojs')
const mongoose = require("mongoose");
const path = require('path')

const PORT = process.env.PORT || 3000;

const User = require("./models/models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


  app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })

  app.get("/exercise", (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
  })

  app.get('/stats', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'stats.html'))
  })


  // app.get('/api/workouts/:id', (_req, res) => {
  //   res.json
  // })

  app.get("/api/workouts", (_, res) => {
    User.find()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  });
 
  app.post("/api/workouts", (_, res) => {
    User.create({})
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.put("/api/workouts/:id", ({body, params}, res) => {
    User.findById(params.id, 
      {$push:{exercises:body}}, 
      {new:true, runValidators: true})
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  });






app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
