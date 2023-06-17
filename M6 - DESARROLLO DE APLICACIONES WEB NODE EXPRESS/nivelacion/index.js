/* // ! Basado en el ejercicio de las query strings para saber la existencia de un usuario, crea un
 * servidor con Node que por medio de una ruta “/switch” cambie el valor de una variable
 * booleana por el valor de un parámetro recibido en la ruta.
 * Devuelve el mensaje “ON” si el valor de la variable booleana es exactamente igual a true y un
 * “Off” si no lo es. */

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    let boolean = true;
    const params = url.parse(req.url, true).query;
    // const params = new URL(req.url, 'http://localhost').searchParams

    if (req.url.includes("/switch")) {
      let buleano = params.buleano;
      //console.log(buleano)
      buleano == "true" ? (boolean = true) : (boolean = false);
      boolean ? res.write("ON") : res.write("OFF");
    }
    res.end();
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));
