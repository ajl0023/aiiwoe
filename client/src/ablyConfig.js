import * as Ably from "ably";

export const ablyRest = new Ably.Rest("8ZlqBg.IDAVaA:2m8tkZT0rhHi58Mv");
export const ablyReal = new Ably.Realtime({
  key: "8ZlqBg.IDAVaA:2m8tkZT0rhHi58Mv",
  clientId: Math.random().toString(),
});
export const getRoom = (roomid) => {
  return ablyReal.channels.get(roomid);
};
export const getAllChannels = (cb) => {
  ablyRest.request(
    "get",
    "/channels",
    { limit: 100, by: "id" },
    null,
    null,
    cb
  );
};
