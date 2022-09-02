const { use } = require("bcrypt/promises");
const User = require("../models/user");
const JWT = require("jsonwebtoken");
exports.creatUser = async (req, res) => {
  const { Email, Password, Username } = req.body;
  //check used Email
  const isNewEmail = await User.isEmailinUse(Email);
  if (!isNewEmail)
    return res.json({ success: false, message: "already used email" });
  //check used username
  const isNewUser = await User.isUsernameinUse(Username);
  if (!isNewUser)
    return res.json({ success: false, message: "already used Username" });
  const user = await User({
    Email,
    Password,
    Username,
    // ConfirmePassword
  });
  await user.save();
  res.json({ success: true, user });
};

exports.UserSignin = async (req, res) => {
  const { Email, Password } = req.body;
  const user = await User.findOne({ Email });

  if (!user)
    return res.json({
      success: false,
      message: "User not found with the given email",
    });

  const isMatch = await user.ComparePassword(Password);
  if (!isMatch)
    return res.json({
      success: false,
      message: "Password does not match ",
    });
  const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({
    success: true,
    user,
    token,
  });
};
