require("dotenv").config();
const { send } = require("./mailer.js");
const http = require("http");
const url = require("url");
const fs = require("fs");

const port = process.env.SERVER_PORT || 3000;

const server = http.createServer((request, response) => {
  const params = url.parse(request.url, true).query;

  if (request.url === "/") {
    fs.readFile("public/index.html", "utf8", (err, file) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.write(
          JSON.stringify({
            status: 404,
            message: "Error al leer el index.html",
            err,
          })
        );
        return response.end();
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    });
  } else if (request.url === "/assets/css/main.css") {
    fs.readFile("public/assets/css/main.css", "utf8", (err, file) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.write(
          JSON.stringify({
            status: 404,
            message: "Error al leer el main.css",
            err,
          })
        );
        return response.end();
      }
      response.writeHead(200, { "Content-Type": "text/css" });
      response.end(file);
    });
  } else if (request.url === "/assets/js/main.js") {
    fs.readFile("public/assets/js/main.js", "utf8", (err, file) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.write(
          JSON.stringify({
            status: 404,
            message: "Error al leer el main.js",
            err,
          })
        );
        return response.end();
      }
      response.writeHead(200, { "Content-Type": "text/js" });
      response.end(file);
    });
  } else if (request.url.startsWith("/mailing?")) {
    console.log(params);
    send(params)
      .then((result) => {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(
          JSON.stringify({
            status: 200,
            message: "Correo satisfactoriamente enviado",
            result,
          })
        );
        response.end();
      })
      .catch((error) => {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.write(
          JSON.stringify({
            status: 404,
            message: "Error al enviar el correo",
            error,
          })
        );
        response.end();
      });
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ status: 404, message: "Page not found" }));
    response.end();
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port} - PID: ${process.pid}`);
});

module.exports = { server };
