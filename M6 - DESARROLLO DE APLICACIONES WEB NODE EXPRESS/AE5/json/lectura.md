# Persistencia en archivos planos en Node.js

**Definición:**

La persistencia en archivos planos en Node.js se refiere a la capacidad de almacenar y recuperar datos en archivos de texto sin formato. Esta técnica es útil cuando se necesita almacenar información de forma persistente sin utilizar una base de datos. Node.js proporciona las herramientas necesarias para trabajar con archivos y manipular su contenido.

**Ejemplos y pasos a seguir:**

1. Instalar paquetes necesarios:

Antes de comenzar, es posible que necesites instalar algunos paquetes adicionales para facilitar el manejo de archivos y la manipulación de objetos JSON. Para ello, utiliza el administrador de paquetes npm de Node.js. 

2. Almacenar objetos JSON en archivos:

Puedes almacenar objetos JSON en archivos utilizando el módulo fs de Node.js. A continuación, se muestra un ejemplo de cómo hacerlo:

```javascript
const fs = require('fs');

const data = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

const jsonData = JSON.stringify(data);

fs.writeFile('data.json', jsonData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Datos guardados con exito en data.json');
});
```
3. Leer información de un archivo y cargarla en objetos JSON:

Para leer información de un archivo y cargarla en objetos JSON, puedes utilizar el módulo fs de Node.js. Aquí tienes un ejemplo:

```javascript
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log('Loaded data:', jsonData);
});
```

4. Modificar información de un archivo:

Para modificar información en un archivo, primero debes leer su contenido, realizar los cambios necesarios y luego escribir los datos actualizados en el archivo. Aquí tienes un ejemplo:

```javascript
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  jsonData.age = 31; // Modificar el campo 'age'
  const updatedData = JSON.stringify(jsonData);

  fs.writeFile('data.json', updatedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data has been updated in data.json');
  });
});
```

5. Eliminar información de un archivo:

Para eliminar información de un archivo, puedes leer su contenido, realizar las modificaciones necesarias y luego sobrescribir el archivo con los datos actualizados. Aquí tienes un ejemplo:

```javascript
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  delete jsonData.email; // Eliminar el campo 'email'
  const updatedData = JSON.stringify(jsonData);

  fs.writeFile('data.json', updatedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data has been deleted from data.json');
  });
});
```

6. Separar las funcionalidades en archivos independientes:

Para optimizar tu código y mantenerlo organizado, es recomendable separar las funcionalidades en archivos independientes. Puedes crear módulos en Node.js y utilizar la palabra clave module.exports para exportar funciones, objetos o variables de un archivo y luego utilizar require para importarlos en otro archivo. Aquí tienes un ejemplo:

```javascript
// archivo1.js
module.exports = {
  greet: function() {
    console.log('Hello!');
  }
};

// archivo2.js
const greetModule = require('./archivo1');
greetModule.greet(); // Salida: Hello!
```

Recuerden que estos son solo ejemplos básicos para mostrarte cómo trabajar con persistencia en archivos planos en Node.js. Puedes expandir estos conceptos y adaptarlos según tus necesidades y requisitos específicos.