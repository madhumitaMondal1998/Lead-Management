const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { authmiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", authmiddleware, loginUser);

module.exports = router;
