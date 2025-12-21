const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", (req, res) => {
    res.json({ message: "Register route working ✅" });
});

router.post("/login", (req, res) => {
    res.json({ message: "Login route working ✅" });
});

router.get("/me", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route working ✅",
        user: req.user,
    });
});

module.exports = router;