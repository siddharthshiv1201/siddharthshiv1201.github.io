import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Good Morning");
});

server.listen(8081, () => {
  console.log("Server running on port 8081");
});
