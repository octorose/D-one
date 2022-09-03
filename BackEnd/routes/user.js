const express = require("express");
const { check } = require("express-validator");
const User = require("../models/user");
const router = express.Router();
const { creatUser, UserSignin } = require("../controllers/user");
const { Isauth } = require("../Middlewares/auth");
const {
  ValidateUserSignup,
  UserValidation,
  SigninValidation,
} = require("../Middlewares/validation/user");
const multer = require("multer");
const sharp = require("sharp");

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("invalide image file!", false);
  }
};
const uploads = multer({ storage, fileFilter });

router.post("/creat-user", ValidateUserSignup, UserValidation, creatUser);
router.post("/sign-in", SigninValidation, UserValidation, UserSignin);
router.post(
  "/upload-profile",
  Isauth,
  uploads.single("profilepic"),
  async (req, res) => {
    const { user } = req;
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "unauthorized access" });
    try {
      const profilebuff = req.file.buffer;
      const { width, height } = await sharp(profilebuff).metadata();
      const avatar = await sharp(profilebuff)
        .resize(Math.round(width * 0.5), Math.round(height * 0.5))
        .toBuffer();
      await User.findByIdAndUpdate(user._id, { avatar });
      res.status(201).json({success: true, message:'Your profile picture is updated'})
    } catch (error) {
      res.status(500).json({success: false, message:'Your profile picture is not updated'})
      console.log("error while upploading image ", error);
    }
  }
);

module.exports = router;
