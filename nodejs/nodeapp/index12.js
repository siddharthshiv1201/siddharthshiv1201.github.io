// let name="John";
// console.log("Hello"+" "+namr);
// op hello john

/// command line argument

// let name1 = process.argv[2];
// let name2 = process.argv[3];
// console.log(`Hello ${name1} and ${name2}`);

//

// const http = require('http');
// let port = process.argv[2] ? parseInt(process.argv[2]) : 8080;

// const server = http.createServer((req, res) => {
//   res.end(`Server running on port ${port}`);
// });

// server.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
import express from 'express';
const app = express();
const port = process.argv[2] || 8080 || 8081 || 8082;

app.get('/', (req, res) => {
  res.send(`Server running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Express server started on port ${port}`);
});
