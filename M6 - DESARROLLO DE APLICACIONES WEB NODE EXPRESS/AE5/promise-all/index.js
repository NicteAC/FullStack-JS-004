const axios = require("axios");

async function getUser() {
  const { data } = await axios.get("https://randomuser.me/api/");
  const user = data.results[0];
  return user;
}

async function getHolidays() {
  const { data } = await axios.get(
    "https://api.victorsanmartin.com/feriados/en.json"
  );
  return data.data;
}

Promise.all([getUser(), getHolidays()]).then((resultado) => {
  const user = resultado[0];
  const nombre = `${user.name.first} ${user.name.last}`;
  const nacimiento = new Date(user.dob.date);
  const cumple = `${nacimiento.getMonth() + 1}-${
    nacimiento.getDate < 10 ? "0" + nacimiento.getDate() : nacimiento.getDate()
  }`;
  const feriados = resultado[1];
  const carrete = feriados.find((f) => f.date.includes(cumple));

  carrete
    ? console.log(
        `Preparense todos porque ${nombre} estara de cumpleaños el feriado ${carrete.title}`
      )
    : console.log(`${nombre} no cumple años en ningun dia feriado :(`);
});
