const express = require("express");
const router = express.Router();

const Item = require("../models/Item");

router.post("/create", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    image: req.body.image,
    size: req.body.size,
    category: req.body.category,
    description: req.body.description,
    materials: req.body.materials,
    quantity: req.body.quantity,
    insideLayer: req.body.insideLayer,
    outsideLayer: req.body.outsideLayer,
    price: req.body.price,
  });

  newItem.save()
    .then((item) => {
      res.json(item);
    });
});

module.exports = router;