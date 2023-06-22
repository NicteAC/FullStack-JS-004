const axios = require("axios");

let nombre;
let nacimiento;

async function getData() {
  let { data } = await axios.get("https://randomuser.me/api/");
  let user = data.results[0];
  nombre = `${user.name.first} ${user.name.last}`;
  nacimiento = user.dob.date;
}

function imprimir() {
  console.log(`El usuario ${nombre} nacio el ${nacimiento}`);
}

getData().then(() => {
  imprimir();
});
