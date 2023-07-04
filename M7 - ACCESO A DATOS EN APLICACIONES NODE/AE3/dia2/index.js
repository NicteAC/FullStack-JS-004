import http from "http";
import fs from "fs";
import { getStudent, createStudent } from "./consultas.js";

http
  .createServer((req, res) => {
    if (req.url === "/student" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const student = JSON.parse(body);
            await createStudent(student);
            res.end(JSON.stringify({ message: "Student created successfully!" }));
          } catch (err) {
            res.statusCode = 500;
            res.end("Error al crear el estudiante: " + err.message);
          }
        });
      }

    if (req.url.startsWith("/students") && req.method === "GET") {
      getStudent()
        .then((student) => {
          res.end(JSON.stringify(student));
        })
        .catch((err) => {
          res.statusCode = 500;
          res.end("Error al obtener estudiantes: " + err.message);
        });
    }
    if (req.url === "/" && req.method === "GET") {
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error al leer el archivo index.html: " + err.message);
        } else {
          res.setHeader("Content-Type", "text/html");
          res.end(data);
        }
      });
    }
  })
  .listen(3000);
