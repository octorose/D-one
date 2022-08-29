const express = require("express");
// const {check} = require("express-validatore")

const router = express.Router();
const { creatUser } = require("../controllers/user");
router.post("/creat-user", creatUser);
module.exports = router;
