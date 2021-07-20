const express = require("express");

const path = require("path");
const app = express();
const server = require("http").createServer(app);

server.listen(process.env.PORT || 5000);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
const {
  getOpenRoom,
  joinRoom,
  users,
  individualSelect,
  indRoomData,
  groupSelect,
  roomData,
  getUsers,
} = require("./users");

io.on("connection", (socket) => {
  socket.on("getUsers", (chatType, cb) => {
    socket.join(chatType);
    const { key, length } = getOpenRoom(io, chatType);

    let usersInRoom = io.sockets.adapter.rooms.get(key);

    usersArr = getUsers(usersInRoom);
    cb(usersInRoom ? usersArr : []);
  });
  socket.on("join", (currentUser, chatType, cb) => {
    joinRoom(io, currentUser, chatType, cb, socket);
  });
  socket.on("leave", (room, chatType) => {
    const roomToSearch = chatType === "group" ? roomData : indRoomData;

    socket.leave(room);
    roomToSearch[room] = io.sockets.adapter.rooms.get(room) || [];
    let usersInRoom = io.sockets.adapter.rooms.get(room);
    usersArr = getUsers(usersInRoom);

    socket.to(room).emit("leave", usersArr);
    socket.to(chatType).emit("leaveSelect", usersArr);
  });
  socket.on("disconnect", () => {
    const user = users.get(socket.id);
    if (user) {
      socket.leave(user.room);
      let usersInRoom = io.sockets.adapter.rooms.get(user.room);
      usersArr = getUsers(usersInRoom);
      socket.to(user.room).emit("leave", usersArr);
      socket.to(user.type).emit("leaveSelect", usersArr);
    }
  });
  socket.on("sendMsg", (data) => {
    io.to(data.room).emit("sendMsg", data);
  });
  socket.on("typing", (room, user) => {
    socket.to(room).emit("typing", user);
  });
  socket.on("finished typing", (room) => {
    socket.to(room).emit("finished typing", socket.id);
  });
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
require("./routes")(app);

module.exports = app;
