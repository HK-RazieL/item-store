const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User");

router.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  bcrypt.hash(password, saltRounds).then((hash) => {
    const newUser = new User({
      username: username,
      password: hash
    });

    newUser.save()
      .then((user) => {
        res.json(user);
      });
  });
});

router.get("/login", (req, res) => {
  let loginUsername = req.body.username;
  let loginPassword = req.body.password;

  User.findOne({ username: loginUsername }).then((user) => {
    bcrypt.compare(loginPassword, user.password).then((passCheck) => {
      if(passCheck){
        res.json("Successfully logged in!");
      } else {
        res.status(403).json("Incorrect login credentials.");
      }
    });
  });
});

module.exports = router;