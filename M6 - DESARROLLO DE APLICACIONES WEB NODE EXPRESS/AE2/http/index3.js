const http = require("http");
// Paso 1 -
/* Importar el módulo “url” en una variable. */
const url = require("url");
http
  .createServer(function (req, res) {
    // Paso 2
    /* Almacenar en una constante los parámetros recibidos en la consulta y
envíalos por consola. */
    const params = url.parse(req.url, true).query;
    console.log(params);
    // Paso 3
    /* Crear un arreglo con un único usuario con las propiedades: rut, nombre y
apellido. */
    let users = [
      {
        rut: "123456789",
        nombre: "Carolina",
        apellido: "Aliaga",
      },
    ];
    // Paso 4
    /* Crear una ruta /usuarios. En esta ocasión debemos usar el método includes
de JavaScript puesto que la url al tener parámetros no será igual a la que definimos
como ruta sino que tendrá concatenada los query strings. */
    if (req.url.includes("/usuarios")) {
      // Paso 5
      /* Usar el método find para encontrar un usuario dentro del arreglo creado en
donde la propiedad rut coincida con el rut recibido como parámetro. Guarda el
resultado en una variable “usuario”. */
      let usuario = users.find((u) => u.rut == params.rut);
      // Paso 6
      /* Usar un operador ternario para evaluar si el “usuario” es true, en caso de ser
así devolver con el método write del parámetro request “¡Usuario encontrado!
Nombre: … - Apellido: ...” (cambia los puntos suspensivos por el nombre y apellido
del usuario), en caso contrario devuelve “No existe ninguna persona registrada con
ese RUT”. */
      usuario
        ? res.write(`¡Usuario encontrado! Nombre: ${usuario.nombre} -
Apellido: ${usuario.apellido}`)
        : res.write("No existe ninguna persona registrada con ese RUT");
    }
    res.end();
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));

/* 
  Paso 7: Si levantas el servidor y realizas una consulta con la siguiente dirección
http://localhost:8080/usuarios?rut=123456789 obtendrás lo que te muestro en la
siguiente imagen. */