//https.get(url[, options][, callback])

// importamos el modulo https
const https = require("https");
//usamos el metodo get del modulo https para consultar la api
https
  .get("https://api.gael.cloud/general/public/clima", (resp) => {
    let data = "";
    //usamos el metodo on del parametro recibido en el callback del metodo get
    //especificando el evento data e imprimiendo la data obtenida de la API
    //formatada a JSON
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      console.log("Data:", JSON.parse(data));
    });
  })
  //usamos el metodo "on" del callback del metodo get especificando el evento "error"
  //para imprimir por consola en su callback el posible error generado por la consulta
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
