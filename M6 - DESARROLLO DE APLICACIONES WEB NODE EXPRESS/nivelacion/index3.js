const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1> Hola Curso </h1>
  `)
}).listen(8080, () => console.log("servidor encendido"))
