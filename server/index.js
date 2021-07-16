const app = require("./server.js");

const server = require("http").createServer(app);

server.listen(process.env.PORT || 5000);
