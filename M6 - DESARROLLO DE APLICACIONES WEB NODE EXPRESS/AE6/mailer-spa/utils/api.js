const axios = require("axios");
const url = "https://mindicador.cl/api";

const mostrar = async () => {
  try {
    const { data } = await axios.get(url);
    const response = data;
    return `<li>El valor del dolar al dia de hoy:${response.dolar.valor} Pesos.</li>
             <li>El valor del euro al dia de hoy:${response.euro.valor} Pesos.</li>
             <li>El valor del uf al dia de hoy:${response.uf.valor} Pesos.</li>
             <li>El valor del utm al dia de hoy:${response.utm.valor} Pesos.</li>
             `;
  } catch (error) {
    console.log(error);
  }
};

// (async () => console.log(await mostrar()))();

module.exports = { mostrar };
