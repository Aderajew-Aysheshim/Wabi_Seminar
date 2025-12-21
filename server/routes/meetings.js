const express = require("express");
const router = express.Router();

const { createMeeting, joinMeeting } = require("../controllers/meetings.controller");

router.post("/", createMeeting);
router.post("/:code/join", joinMeeting);

module.exports = router;