const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, trim: true, minlength: 4, maxlength: 20, lowercase: true, unique: true, required: true },
  email: { type: String, minlength: 5, maxlength: 255, required: true },
  password: { type: String, require: true, minlength: 4 },
  level: { type: String, default: "user"}
});

module.exports = User = mongoose.model("user", UserSchema);