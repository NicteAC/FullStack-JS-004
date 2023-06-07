//https.get(url[, options][, callback])

const https = require("https");

https.get("https://api.gael.cloud/general/public/clima", (resp) => {
  let data = "";
  resp.on("data", (chunk) => {
    data += chunk;
  });
  resp.on("end", () => {
      console.log("Data:", JSON.parse(data));
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
});
