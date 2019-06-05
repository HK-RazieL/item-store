const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/keys").secretOrKey;

const User = require("../models/User");

router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds).then((hash) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
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
        jwt.sign({ id: user.id, username: user.username, auth: true }, 
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

router.get("/:id", (req, res) => {
  User.findOne({ id: req.body.id }).then((user) => {
    res.json(user);
  })
})

module.exports = router;