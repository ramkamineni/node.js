const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  res.write("link chuste challu click cheyadame...");
  res.end(".....edina pani chusuko raa");
});
server.listen("3101",() => {
  console.log("");
});
