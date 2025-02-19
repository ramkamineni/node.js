const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end(" karthik loverboy");
});
server.listen("3101",() => {
  console.log(" ");
});
