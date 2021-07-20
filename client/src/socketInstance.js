import io from "socket.io-client";

let getSocket = io("localhost:5000");

export const getNewSocket = () => {
  getSocket = io("localhost:5000");
};
export { getSocket };
