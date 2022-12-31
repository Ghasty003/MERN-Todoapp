const express = require("express");
const { Login, Signup } = require("../controllers/userController");
const router = express.Router();

router.post("/login", Login);
router.post("/signup", Signup);

module.exports = router;
