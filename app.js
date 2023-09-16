const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/add-task", async (req, res) => {
  try {
    console.log(req.body);
    return res.status(201).send(req.body.task);
  } catch (err) {
    console.log(err.message);
  }
});

app.use("/edit-task", async (req, res) => {
  try {
    console.log(req.body);
    return res
      .status(201)
      .send({ newTask: req.body.newTask, index: req.body.index });
  } catch (err) {
    console.log(err.message);
  }
});

app.use("/delete-task", async (req, res) => {
  try {
    console.log(req.body.index);
    return res.status(201).send({ index: req.body.index });
  } catch (err) {
    console.log(err.message);
  }
});

app.use("/complete-task", async (req, res) => {
  try {
    console.log(req.body);
    return res.status(201).send({ index: req.body.index });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(process.env.PORT || 8080, function () {
  console.log("Express app running on port " + 8080);
});
