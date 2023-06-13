const chalk = require("chalk");
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import _ from "lodash";

/* axios
.<verbo http>( <url a consultar>)
.then( [callback con la data de la consulta] )
.catch( [callback con el error de la consulta] ) */

console.log(chalk.red.bold("Hello", chalk.underline("world") + "!"));
console.log(uuidv4().slice(0, 6));

axios
  .get("https://rickandmortyapi.com/api/character/2")
  .then((data) => {
    console.log(data.data.name);
  })
  .catch((error) => {
    console.error(error);
  });

const numeros = [1, 2, 3, 4, 5, 6];
console.log(_.partition(numeros, (n) => n % 2));
