const http = require("http");
http
  .createServer(function (req, res) {
    // Paso 1 - Imprimir por consola el parámetro req en su propiedad url.
    console.log(req.url);
    // Paso 2 - Guardar en una variable la url recibida en el parámetro req.
    const url = req.url;
    // Paso 3 - Crear un condicional que evalúe si la url es igual a “/hoy”.
    if (url == "/hoy") {
      /* Paso 4 - Dentro del bloque de código del condicional usa el parámetro res con un
            método llamado write, que sirve para devolver al cliente algún mensaje. Este siempre
            debe ser tipo String, por lo que deberás usar las template literales para concatenar
            un nuevo objeto Date de JavaScript. */
      res.write(`${new Date()}`);
    }
    // Paso 5 - Terminar la consulta con el método “end” del parámetro res.
    res.end();
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));
