const fs = require("fs");

//Funcion para obtener la lista de usuarios
function getUsers() {
  const data = fs.readFileSync("users.json", "utf8", (err) => {
    if (err) throw err;
  });
  return JSON.parse(data);
}

//Funcion para guardar la lista de usuarios en el archivo
function saveUsers(users) {
  /* El segundo argumento null indica que no se utilizará una función de reemplazo para transformar los valores y el tercer argumento 2 especifica el número de espacios de indentación para formatear la cadena JSON. */
  const jsonData = JSON.stringify(users, null, 2);
  fs.writeFileSync("users.json", jsonData, "utf8");
}

//Funcion para agregar un nuevo usuario
function addUser(user) {
  const users = getUsers();
  users.users.push(user);
  saveUsers(users);
}

//Ejemplo de uso

const newUser = {
  name: "Homer Simpson",
  email: "emailVerdadero@example.cl",
  age: 35,
};

addUser(newUser);

const users = getUsers();

console.log("Usuarios Registrados: ", users);
