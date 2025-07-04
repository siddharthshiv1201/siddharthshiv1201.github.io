import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Good Evening");
});

server.listen(8082, () => {
  console.log("Server running on port 8082");
});
