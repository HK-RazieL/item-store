const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, trim: true },
  size: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  materials: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0, default: 0 },
  category: { type: String, required: true },
  insideLayer: { type: [String] },
  outsideLayer: { type: [String] },
  price: { type: Number, required: true, default: 0.00, min: 0 },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = ItemSchema = mongoose.model("item", ItemSchema);

