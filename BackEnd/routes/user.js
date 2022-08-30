const express = require("express");
const {check} = require("express-validator")

const router = express.Router();
const { creatUser } = require("../controllers/user");
const { ValidateUserSignup, UserValidation } = require("../Middlewares/validation/user");

router.post("/creat-user", ValidateUserSignup, UserValidation,creatUser);
module.exports = router;
