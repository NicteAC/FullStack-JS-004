const _ = require("lodash");

const string = "hola alumnos";
//console.log(_.capitalize(string));

const array = [1, 2, 3, 4, 5, 6];
//console.log(_.chunk(array, 3))

const numbers = [1, 2, 3, 4, 5];
//console.log(_.filter(numbers, (n) => n % 2 === 0));

const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 25 },
];
// console.log(_.groupBy(users, "age"));

//console.log(_.reduce(numbers, (acumulador, numero) => acumulador + numero, 0));

//console.log(_.flatMap(numbers, (num) => [num * 2, num ** 2]));

// console.log(_.orderBy(users, ["age"], ["desc"]));

const products = [
  { id: 1, name: "Product 1", category: "A" },
  { id: 2, name: "Product 2", category: "B" },
  { id: 3, name: "Product 3", category: "A" },
  { id: 4, name: "Product 4", category: "B" },
  { id: 5, name: "Product 5", category: "C" },
  { id: 6, name: "Product 6", category: "C" },
];
console.log(_.uniqBy(products, "category"));
