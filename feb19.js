const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const parsed_url = url.parse(req.url, true);
  console.log(parsed_url);
  // console.log(req.method);
  if (req.method == "GET") {
    if (req.url == "/menu") {
      res.writeHead(201, "tulasi", { "content-type": "application/json" });
      res.write("WELCOME TO OUR RESTAURANT");
      res.end();
      if (req.method == "/menu/veg") {
        res.writeHead(201, "tulasi", { "content-type": "application/json" });
        res.write("veg items");
        res.end();
      } else {
        res.end();
      }
    }
  } else {
    res.writeHead(400, "not found");
    res.write("invalid request");
    res.end();
  }
});
server.listen("3101", () => {
  console.log("server running");
});
