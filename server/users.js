module.exports = class UserUtils {
  constructor() {
    this.roomData = {};
    this.indRoomData = {};
    this.groupSelect = [];
    this.individualSelect = [];
    this.users = new Map();
  }

  // we use these as reference whenever we need to get a user from a specific category
  createRooms = () => {
    for (let i = 0; i < 10; i++) {
      this.indRoomData[Math.random()] = new Set();
      this.roomData[Math.random()] = new Set();
    }
  };
  testFunc = () => {};
  getOpenRoom = (io, chatType) => {
    const limit = chatType === "group" ? 8 : 2;
    const roomToSearch =
      chatType === "group" ? this.roomData : this.indRoomData;

    for (let key in roomToSearch) {
      if (io.sockets.adapter.rooms.get(key)) {
        const length = io.sockets.adapter.rooms.get(key).size;
        if (length < limit) {
          return { key, length };
        }
      } else {
        return { key };
      }
    }
  };
  joinRoom = (io, currentUser, chatType, cb, socket) => {
    const { key, length } = this.getOpenRoom(io, chatType);
    const roomToInsert =
      chatType === "group" ? this.roomData : this.indRoomData;
    const user = {
      ...currentUser,
      id: socket.id,
      room: key,
      type: chatType,
    };

    roomToInsert[key] =
      io.sockets.adapter.rooms.get(key) || new Set().add(socket.id);
    this.users.set(socket.id, user);
    cb(key);
    socket.join(key);
    const userTemp = [];
    for (let user of io.sockets.adapter.rooms.get(key) || []) {
      userTemp.push(this.users.get(user));
    }

    io.to(key).emit("join", userTemp);

    io.to(chatType).emit("selectUsers", userTemp);
  };
  getUsers = (usersInRoom) => {
    let usersArr = [];
    for (let id of usersInRoom || []) {
      usersArr.push(this.users.get(id));
    }
    return usersArr;
  };
};
