const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("index2.html", "utf8", (err, html) => {
        res.end(html);
      });
    }
    if (req.url == "/estilos") {
      res.writeHead(200, { "Content-Type": "text/css" });
      fs.readFile("style.css", (err, css) => {
        res.end(css);
      });
    }
  })
  .listen(8080, () => console.log("servidor encendido"));
