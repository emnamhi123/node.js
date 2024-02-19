const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!!!</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on Port 3000");
});