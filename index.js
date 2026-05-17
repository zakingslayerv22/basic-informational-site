const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(8080, () => {
  console.log("J'écoute sur 8080.");
});
