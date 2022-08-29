const User = require('../models/user')
exports.creatUser = async (req, res) => {
    const {Email, Password, Username} = req.body;
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
      });
      res.json(user);
      await user.save();
  }