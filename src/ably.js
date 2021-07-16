import * as Ably from "ably";
let currChannel;
let clientId = Math.random().toString();
const generateId = (id, name) => {
  console.log(5323230);
  if (!currChannel) {
    var ably = new Ably.Realtime({
      key: "8ZlqBg.IDAVaA:2m8tkZT0rhHi58Mv",
      clientId: clientId,
    });
    let roomid = id;

    var channel = ably.channels.get(roomid);

    channel.attach(function (err) {
      if (err) {
        return console.error("Error attaching to the channel");
      }
      console.log(id);
      console.log("We are now attached to the channel");
    });
    currChannel = channel;
    return channel;
  }
  return currChannel;
};

export { generateId, clientId };
