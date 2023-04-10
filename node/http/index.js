const { log } = require("console");
const http = require("http");

const routes = {
  "/": (response) => {
    response.write("Hello World!");
    response.end();
  },
  "/api/courses": (response) => {
    response.write(JSON.stringify([1, 2, 3, 4]));
    response.end();
  },
  "/favicon.ico": () => {
    console.log("Icone foi solicitado.");
  },
};

const server = http.createServer((request, response) => {
  try {
    routes[request.url](response);
  } catch (err) {
    console.log("Tentativa de URL: ", request.url);
  }
});

const port = 5000;

server.listen(port);

console.log(`Listening on port ${port}...`);
