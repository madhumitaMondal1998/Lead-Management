const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { authmiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// Protected Route Example
router.get('/protected', authmiddleware, (req, res) => {
    res.json({ msg: 'This is a protected route' });
  });

module.exports = router;
