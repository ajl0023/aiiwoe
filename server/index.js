const express = require("express");

const path = require("path");
const app = express();
const server = require("http").createServer(app);
server.listen(process.env.PORT || 5000);
var Ably = require("ably");
app.use(express.static(path.join(__dirname, "../client/build")));

const { group } = require("console");

app.use(express.json());

let db;

// function createChannel() {
//   var ably = new Ably.Realtime({
//     key: "8ZlqBg.IDAVaA:2m8tkZT0rhHi58Mv",
//     clientId: Math.random().toString(),
//   });
//   let roomid = id;
//   channel.attach(function (err) {
//     if (err) {
//       return console.error("Error attaching to the channel");
//     }
//     console.log("We are now attached to the channel");
//   });
// }
var ably = new Ably.Realtime({
  key: "8ZlqBg.IDAVaA:2m8tkZT0rhHi58Mv",
  clientId: "server",
});

let id = Math.random().toString();
const channelsGroup = {};
const channelsInd = {};
const checkChannelGroup = (id) => {
  for (let currId in channelsGroup) {
    var channel = ably.channels.get(currId);

    channel.attach(function (err) {
      if (err) {
        return console.error("Error attaching to the channel");
      }
    });
    channel.presence.get(function (err, members) {
      channelsGroup[currId] = members.length;
    });
  }
  for (let currid in channelsGroup) {
    if (channelsGroup[currid] < 2) {
      return currid;
    }
  }
  id = Math.random().toString();
  channelsGroup[id] = 0;
  return id;
};
function checkChannelInd() {
  for (let currId in channelsInd) {
    var channel = ably.channels.get(currId);

    channel.attach(function (err) {
      if (err) {
        return console.error("Error attaching to the channel");
      }
    });
    channel.presence.get(function (err, members) {
      channelsInd[currId] = members.length;
    });
  }
  for (let currid in channelsInd) {
    if (channelsInd[currid] < 2) {
      return currid;
    }
  }
  id = Math.random().toString();
  channelsInd[id] = 0;
  return id;
}
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
app.post("/token", (req, res) => {
  let token;
  console.log(req.body.type);
  if (req.body.type === "group") {
    token = checkChannelGroup(id);
  } else {
    token = checkChannelInd();
  }

  res.json({ token: token });
});
app.post("/token/new", (req, res) => {
  id = Math.random().toString();
  channels[id] = 0;
  res.json({ token: id });
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
require("./routes")(app);

module.exports = app;
