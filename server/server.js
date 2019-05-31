const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const mongoURI = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

const items = require("./routes/items");
const users = require("./routes/users");

const app = express();

app.use(bodyParser.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log("Database is running");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/user/", users);
app.use("/items/", items);

app.listen(port, () => {
  console.log("Server is running");
})