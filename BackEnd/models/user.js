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
userSchema.statics.isEmailinUse = async function (Email) {
  if (!Email) throw new Error("invalid email");
  try {
    const user = await this.findOne({ Email });
    if (user) return false;

    return true;
  } catch (error) {
    console.log("error in isEmailinUse Method", error.message);
    return false;
  }
};
userSchema.statics.isUsernameinUse = async function (Username) {
  if (!Username) throw new Error("invalid email");
  try {
    const user = await this.findOne({ Username });
    if (user) return false;

    return true;
  } catch (error) {
    console.log("error in isEmailinUse Method", error.message);
    return false;
  }
};
module.exports = mongoose.model("User", userSchema);
