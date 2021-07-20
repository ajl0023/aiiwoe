const roomData = {};
const indRoomData = {};
const groupSelect = [];
const individualSelect = [];
// we use these as reference whenever we need to get a user from a specific category
const createRooms = () => {
  for (let i = 0; i < 10; i++) {
    indRoomData[Math.random()] = new Set();
    roomData[Math.random()] = new Set();
  }
};
createRooms();
const users = new Map();
module.exports = {
  users,
  groupSelect,
  individualSelect,
  roomData,
  indRoomData,
  getOpenRoom: (io, chatType) => {
    const limit = chatType === "group" ? 8 : 2;
    const roomToSearch = chatType === "group" ? roomData : indRoomData;
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
  },
  joinRoom: (io, currentUser, chatType, cb, socket) => {
    const { key, length } = module.exports.getOpenRoom(io, chatType);
    const user = {
      ...currentUser,
      id: socket.id,
      room: key,
      type: chatType,
    };
    roomData[key] = io.sockets.adapter.rooms.get(key) || [socket.id];
    users.set(socket.id, user);
    cb(key);

    socket.join(key);
    const userTemp = [];
    for (let user of io.sockets.adapter.rooms.get(key) || []) {
      userTemp.push(users.get(user));
    }

    io.to(key).emit("join", userTemp);
    io.to(chatType).emit("selectUsers", userTemp);
  },
  getUsers: (usersInRoom) => {
    let usersArr = [];
    for (let id of usersInRoom || []) {
      usersArr.push(users.get(id));
    }
    return usersArr;
  },
};
