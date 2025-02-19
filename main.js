const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  res.write("link chuste challu click cheyadamena");
  res.end("  ....edina pani chusukooo raaa ");
});
server.listen("3101", () => {
  console.log("");
});
