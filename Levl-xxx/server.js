let app = require("./app");
let http = require("htpp");

let port = normalizePort(process.env.PORT | "8000");

let server = http.createServer(app);
