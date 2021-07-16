const express = require("express");

const path = require("path");

const app = require("./server.js");
const cors = require("cors");
const { addUser, getAvailRoom, userCount, getUser } = require("./users");

app.get("/3", (req, res) => {
  res.json("test");
});
const server = require("http").createServer(app);

server.listen(process.env.PORT || 5000);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("join", (user) => {
    const availRoom = getAvailRoom(io);

    addUser(user, availRoom.currRoom, socket);
    socket.join(availRoom.currRoom);
    const users = userCount(io);

    io.in(availRoom.currRoom).emit("retrive room", users);
    io.emit("getCount", users);

    const rooms = io.of("/").adapter.rooms;
  });

  socket.on("getGroupRoom", (data, callback) => {
    const availRoom = userCount(io);

    callback(null, availRoom || null);
  });

  socket.on("sendMessage", (msg, room) => {
    const message = {
      text: msg,
      user: { ...getUser(socket.id), id: socket.id },
    };
    io.in(room).emit("sendMessage", message);
  });
});
