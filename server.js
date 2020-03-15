const express = require("express");
const logger = require("morgan");
const mongojs = require('mongojs')
const mongoose = require("mongoose");
const path = require('path')

const PORT = process.env.PORT || 3000;

const userLog = require("./models/models");
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


  





app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
