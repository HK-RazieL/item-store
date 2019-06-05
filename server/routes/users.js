const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/keys").secretOrKey;

const User = require("../models/User");

router.post("/register", (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  bcrypt.hash(password, saltRounds).then((hash) => {
    const newUser = new User({
      username: username,
      email: email,
      password: hash
    });

    newUser.save()
      .then((user) => {
        res.json(user);
      });
  });
});

router.post("/login", (req, res) => {
  let loginUsername = req.body.username;
  let loginPassword = req.body.password;

  User.findOne({ username: loginUsername }).then((user) => {
    bcrypt.compare(loginPassword, user.password).then((passCheck) => {
      if(passCheck){
        jwt.sign({ id: user.id, username: user.username }, 
          jwtSecret, 
          { expiresIn: "1h" }, 
          (error, token) => {
            res.json({ 
              success: true,
              token: "Bearer " + token
            });
        });
      } else {
        res.status(403).json("Incorrect login credentials.");
      }
    });
  })
  .catch((error) => {
    res.status(404).json("User not found.");
  });
});

module.exports = router;