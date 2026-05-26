module.exports = (io, socket) => {
    socket.on("signaling-offer", (data) => {
        socket.to(data.meetingCode).emit("signaling-offer", data);
    });

    socket.on("signaling-answer", (data) => {
        socket.to(data.meetingCode).emit("signaling-answer", data);
    });

    socket.on("signaling-ice", (data) => {
        socket.to(data.meetingCode).emit("signaling-ice", data);
    });
};