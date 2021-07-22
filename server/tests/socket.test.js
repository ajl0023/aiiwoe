const io = require("socket.io-client");
const { createServer, userFunctions } = require("../index");
const socketUrl = "http://localhost:5000";
// jest.mock("../users");

describe("socket", () => {
  let server;
  let sockets;
  beforeEach((done) => {
    for (let i in userFunctions.indRoomData) {
      userFunctions.indRoomData[i] = new Set();
      userFunctions.roomData[i] = new Set();
    }
    sockets = [];

    server = createServer();

    done();
  });

  afterEach((done) => {
    sockets.forEach((e) => e.disconnect());
    server.close(() => {});
    console.log("disconnecting...");

    done();
  });
  const makeSocket = (id = 0) => {
    const socket = io.connect(socketUrl, {
      "reconnection delay": 0,
      "reopen delay": 0,
      "force new connection": true,
      transports: ["websocket"],
    });
    socket.on("connect", () => {
      console.log(`[client ${id}] connected`);
    });

    sockets.push(socket);
    return socket;
  };
  test("should correctly handle when user joins and leaves individual Rooms", (done) => {
    const socket = makeSocket();
    socket.emit("join", { name: "affogato" }, "individual", (room) => {
      const indrooms = userFunctions.indRoomData;
      const grouprooms = userFunctions.roomData;
      const indUsers = [];
      const groupUsers = [];

      for (let room in indrooms) {
        indUsers.push(...indrooms[room]);
      }
      for (let room in grouprooms) {
        groupUsers.push(...grouprooms[room]);
      }
      expect(groupUsers.length).toBe(0);
      expect(indUsers.length).toBe(1);
      socket.emit("leave", room, "individual", () => {
        expect(indrooms[room].length).toBe(0);
        done();
      });
    });
  });
  test("user should join a new room when capacity reaches 2", (done) => {
    const sockets = [...Array(3)].map((_, i) => makeSocket(i));

    const users = ["affogato", "coffee", "coffee1"];
    let rooms = [];
    async function joinUsers() {
      await Promise.all(
        sockets.map((socket, id) => {
          return new Promise((resolve) => {
            socket.emit("join", { name: users[id] }, "individual", () => {
              resolve();
            });
          });
        })
      );

      for (let room in userFunctions.indRoomData) {
        if (userFunctions.indRoomData[room].size === 2) {
          rooms.push(userFunctions.indRoomData[room]);
        }
        if (userFunctions.indRoomData[room].size === 1) {
          rooms.push(userFunctions.indRoomData[room]);
        }
      }
    }
    joinUsers().then(() => {
      expect(rooms[0].size).toBe(2);
      expect(rooms[1].size).toBe(1);
      done();
    });
  });
  test("user should join a new room when capacity reaches 8", (done) => {
    const sockets = [...Array(9)].map((_, i) => makeSocket(i));

    const users = [
      "affogato1",
      "coffee1",
      "coffee1",
      "affogato2",
      "coffee2",
      "coffee3",
      "affogato3",
      "coffee3",
    ];
    let rooms = [];
    async function joinUsers() {
      await Promise.all(
        sockets.map((socket, id) => {
          return new Promise((resolve) => {
            socket.emit("join", { name: users[id] }, "group", () => {
              resolve();
            });
          });
        })
      );

      for (let room in userFunctions.roomData) {
        if (userFunctions.roomData[room].size === 8) {
          rooms.push(userFunctions.roomData[room]);
        }
        if (userFunctions.roomData[room].size === 1) {
          rooms.push(userFunctions.roomData[room]);
        }
      }
    }
    joinUsers().then(() => {
      expect(rooms[0].size).toBe(8);
      expect(rooms[1].size).toBe(1);
      done();
    });
  });
  const joinPromise = (socket, type) => {
    return new Promise((resolve) => {
      socket.emit("join", { name: "affogato" }, type, (data) => {
        resolve(data);
      });
    });
  };
  test("should correctly emit the proper length of the available room", async () => {
    const socket1 = makeSocket();
    const socket2 = makeSocket();

    socket1.emit("getUsers", "individual", (room) => {
      expect(room.length).toBe(0);
    });
    socket1.on("selectUsers", (userTemp) => {
      expect(userTemp.length).toBe(1);
    });
    await joinPromise(socket2, "individual");
    return;
  });
  test("select users are properly updated when user leaves", async () => {
    const socket1 = makeSocket(1);

    const socket2 = makeSocket(2);

    const joinP = joinPromise(socket1, "individual");
    const roomSocket1 = await joinP;

    socket2.emit("getUsers", "individual", (room) => {
      expect(room.length).toBe(1);
    });
    socket1.emit("leave", roomSocket1, "individual", () => {});
    socket2.on("leaveSelect", (val) => {
      expect(val.length).toBe(0);
      return;
    });
  });
  test("correctly broadcasts messages to room", async () => {
    const socket1 = makeSocket(1);
    const socket2 = makeSocket(2);

    const room = await joinPromise(socket1, "individual");
    await joinPromise(socket2, "individual");
    socket1.emit("sendMsg", { room });

    const msgProm = new Promise((resolve) => {
      socket2.on("sendMsg", (data) => {
        resolve(data);
      });
    });
    const msg = await msgProm;

    expect(msg).toBeTruthy();
  });
});
