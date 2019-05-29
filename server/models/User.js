const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, trim: true, minlength: 6, maxlength: 20, lowercase: true, unique: true, required: true },
  password: { type: String, required: true }
});

module.exports 