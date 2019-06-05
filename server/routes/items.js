const express = require("express");
const router = express.Router();
const passport = require("passport");

const Item = require("../models/Item");

router.get("/",  (req, res) => {
  Item.find()
    .sort({ date: -1, category: 1 })
    .then((items) => {
      res.json(items);
    });
});

router.post("/create", passport.authenticate("jwt", { session: false }), (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    image: req.body.image,
    size: req.body.size,
    description: req.body.description,
    price: req.body.price,
  });

  newItem.save()
    .then((item) => {
      res.json(item);
    });
});

router.delete("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.remove()
        .then(() => {
          res.json({ success: true });
        });
    })
    .catch((error) => {
      res.status(404).json({ success: false });
    })
})

module.exports = router;