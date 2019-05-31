const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, trim: true, minlength: 4, maxlength: 20, lowercase: true, unique: true, required: true },
  password: { type: String, require: true },
  level: { type: String, default: "user"}
});

module.exports = User = mongoose.model("user", UserSchema);