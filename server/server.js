const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("client"));

io.on("connection", (socket) => {

  socket.on("set username", (username) => {
    if (!username) return;
    socket.username = username;
    socket.broadcast.emit("system message", `${username} joined the chat`);
  });

  socket.on("chat message", (data) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    io.emit("chat message", {
      user: data.user,
      text: data.text,
      time: time,
    });
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      socket.broadcast.emit("system message", `${socket.username} left the chat 👋`);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
