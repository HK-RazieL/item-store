const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  size: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  price: { type: Number, required: true, default: 0.00, min: 0 },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = Item = mongoose.model("item", ItemSchema);