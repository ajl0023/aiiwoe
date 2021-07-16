let currRoom = Math.random();
const users = {};

const userCount = (io) => {
  const rooms = io.of("/").adapter.rooms;
  const room = rooms.get(currRoom);
  const usersArr = [];
  if (room) {
    for (let i of room) {
      usersArr.push(users[i]);
    }
  }
  // let users;
  // if (rooms.get(currRoom)) {
  //   users = rooms
  //     .get(currRoom)
  //     .entries()
  //     .map((id) => {
  //       return users[id];
  //     });
  // }

  // console.log(users);
  return rooms.get(currRoom) ? usersArr : [];
};
const getUser = (id) => {
  return users[id];
};

const getAvailRoom = (io) => {
  const rooms = io.of("/").adapter.rooms;

  if (rooms.get(currRoom) && rooms.get(currRoom).size >= 8) {
    currRoom = Math.random();
    return {
      currRoom,
      users: rooms.get(currRoom),
    };
  }
  if (!rooms.get(currRoom) || rooms.get(currRoom).size <= 8) {
    return {
      currRoom,
      users: rooms.get(currRoom),
    };
  }
};
const addUser = ({ name }, roomid, socket) => {
  name = name.trim();

  if (users[name]) {
    return {
      error: "Username already taken",
    };
  }

  const user = {
    name,
    currRoom,
  };

  users[socket.id] = user;
};
module.exports = {
  addUser,
  getUser,
  userCount,
  getAvailRoom,
};
