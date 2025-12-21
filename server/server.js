const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { PORT } = require("./config");


const authRoutes = require("./routes/auth");
const meetingRoutes = require("./routes/meetings");


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});


app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("✅ Wabi-Seminar Backend is running!");
});



app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingRoutes);


io.on("connection", (socket) => {
    console.log("🟢 Client connected:", socket.id);

    socket.on("join-meeting", (meetingCode) => {
        socket.join(meetingCode);
        socket.to(meetingCode).emit("user-joined", socket.id);
    });

    socket.on("chat-message", ({ meetingCode, message }) => {
        io.to(meetingCode).emit("new-chat-message", {
            sender: socket.id,
            message,
        });
    });

    socket.on("disconnect", () => {
        console.log("🔴 Client disconnected:", socket.id);
    });
});


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});