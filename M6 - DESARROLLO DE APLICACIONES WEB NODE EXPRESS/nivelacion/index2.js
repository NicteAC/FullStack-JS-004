/* //! Basado en el ejercicio para obtener la fecha de hoy, crea un servidor con Node que
! disponibilice una ruta /Saludo que devuelva el mensaje “Hola! ¿Cómo estás?”. */

const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    if (url == "/Saludo") {
      res.write(`Hola! ¿Como estas?`);
    }
    res.end();
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));
