const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    // unique: true,
  },
  Username: {
    type: String,
    required: false,
    // unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  avatar: Buffer,
});

module.exports = mongoose.model("User", userSchema);
