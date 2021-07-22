import io from "socket.io-client";

let getSocket = io("");

export const getNewSocket = () => {
  getSocket = io("");
};
export { getSocket };
