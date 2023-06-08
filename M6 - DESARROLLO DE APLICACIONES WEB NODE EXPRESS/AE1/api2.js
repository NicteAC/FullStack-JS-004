//https.get(url[, options][, callback])

const https = require("https");

const ciudad = "Futaleufú";

https
  .get("https://api.gael.cloud/general/public/clima", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      let climas = JSON.parse(data);
      let miClima = climas.find((c) => c.Estacion == ciudad);
      console.log(miClima);
    });
  })

  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
