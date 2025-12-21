const { nanoid } = require("nanoid");

const createMeeting = (req, res) => {
    const meetingCode = nanoid(8);
    res.status(201).json({ message: "Meeting created", meetingCode });
};

const joinMeeting = (req, res) => {
    const { code } = req.params;
    res.json({ message: `Joined meeting ${code}` });
};

module.exports = { createMeeting, joinMeeting };