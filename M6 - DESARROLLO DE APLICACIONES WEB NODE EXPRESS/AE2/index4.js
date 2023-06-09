// Paso 1 - Importar el módulo http en una constante.
const http = require("http");
// Paso 2 - Importar el módulo url en una constante.
const url = require("url");
// Paso 3 - Importar el módulo File System en una constante.
const fs = require("fs");
/* Paso 4 - Crear un servidor con el método createServer del módulo http que esté
disponible en el puerto 8080. */
http
  .createServer(function (req, res) {
    /* Paso 5 - Almacenar los parámetros de la consulta en una constante con el método
parse del módulo url y su propiedad query */
    const params = url.parse(req.url, true).query;
    const nombre = params.nombre;
    const contenido = params.contenido;
    /* Paso 6 - Crear una ruta “/crear” que ejecute la creación de un archivo con el método
writeFile del módulo File System, usando los parámetros nombre y contenido de la
url expuestos en la url de la petición. Devuelve un mensaje de éxito al cliente. */
    if (req.url.includes("/crear")) {
      fs.writeFile(nombre, contenido, () => {
        res.write("Archivo creado con exito!");
        res.end();
      });
    }
    /* Paso 7 - Crea una ruta “/leer” que use el método readFile del módulo File System para
obtener el contenido del archivo cuyo nombre debe ser el obtenido por query string. */
    if (req.url.includes("/leer")) {
      fs.readFile(nombre, (err, data) => {
        res.write(data);
        res.end();
      });
    }
    /* Paso 8 - Crear una ruta “/renombrar” que procese el método rename del módulo
    fileSystem especificando el nombre del archivo devolviendo en su callback un
    mensaje de éxito. */
    if (req.url.includes("/renombrar")) {
      fs.rename("Repertorio.txt", nombre, (err, data) => {
        res.write(`Archivo Repertorio.txt renombrado por ${nombre}`);
        res.end();
      });
    }
    /* Paso 9 - Crear una ruta “/eliminar” que procese el método unlink del módulo File
    System especificando el nombre del archivo devolviendo en su callback un mensaje
    de éxito. */
    if (req.url.includes("/eliminar")) {
      fs.unlink(nombre, (err, data) => {
        res.write(`Archivo ${nombre} eliminado con exito`);
        res.end();
      });
    }
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));

/* Crea una ruta “/leer” que use el método readFile del módulo File System para
  obtener el contenido del archivo cuyo nombre debe ser el obtenido por query string. */
