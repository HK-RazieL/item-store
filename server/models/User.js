const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, trim: true, minlength: 6, maxlength: 20, lowercase: true },
});

module.exports 