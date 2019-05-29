const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const mongoURI = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const app = express();

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is running");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("Server is running");
})