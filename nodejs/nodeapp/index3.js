import http from 'http'

let server = http.createServer((req, res) => {
    res.end("Request received...");
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})