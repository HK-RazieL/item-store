const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltWorkFactor = 10;

const User = require("../models/User");


router.post("/", (req, res) => {
    bcrypt.hash(req.body.password, saltWorkFactor).then((hash) => {
      const newUser = new User({
        username: req.body.username,
        password: hash
      });

      newUser.save()
        .then((user) => {
          res.json(user);
        });
    });
});

module.exports = router;