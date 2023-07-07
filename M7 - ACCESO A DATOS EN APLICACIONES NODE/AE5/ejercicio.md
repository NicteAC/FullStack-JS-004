# Ejercicio de Node.js, MySQL, ES6 y Sequelize

Este ejercicio implicará la creación de un pequeño sistema de gestión de usuarios utilizando Node.js, MySQL, ES6 y Sequelize. Crearás una clase de usuario y utilizarás Sequelize para interactuar con la base de datos de MySQL.

## Instrucciones:

1. Crea un nuevo proyecto Node.js e instala las dependencias necesarias: `sequelize`, `mysql2` y `dotenv` para gestionar las variables de entorno.

2. Configura Sequelize para conectarse a una base de datos MySQL. Los detalles de la base de datos deben ser almacenados en un archivo `.env`.

3. Crea una clase `User` utilizando la sintaxis de clase ES6. Esta clase deberá tener las siguientes propiedades: `firstName`, `lastName` y `email`. También, define un constructor que acepte estos tres argumentos.

4. Utiliza Sequelize para definir un modelo `User` que represente a la clase `User` en la base de datos. Asegúrate de que los tipos de datos de los atributos coincidan con los tipos de datos que esperarías para un nombre, un apellido y un correo electrónico.

5. Implementa las operaciones CRUD para el modelo `User`:

   - `createUser`: Debe aceptar un objeto `User` y almacenarlo en la base de datos.
   - `getAllUsers`: Debe recuperar todos los usuarios de la base de datos y devolverlos como una lista de objetos `User`.
   - `updateUser`: Debe aceptar un objeto `User` y actualizar el registro correspondiente en la base de datos.
   - `deleteUser`: Debe aceptar un objeto `User` y eliminar el registro correspondiente en la base de datos.

6. En tu archivo principal (`index.js`), crea una función `main` asíncrona donde se invoquen las funciones CRUD para demostrar su funcionamiento. 

Recuerda que este ejercicio es para practicar y aprender. Si te encuentras con dificultades, consulta la documentación correspondiente o busca recursos en línea.

## Criterios de evaluación:

5.1 Reconoce las características del lenguaje Javascript ES6 para la definición de clases y objetos: Debes poder demostrar la capacidad de definir y utilizar clases en ES6, incluyendo la definición de propiedades y el uso del constructor.

5.2 Identifica las características, ventajas y desventajas de utilizar un ORM para la implementación de la capa de acceso a datos en un aplicativo Node.js: Debes poder discutir por qué se utilizó Sequelize en este ejercicio y qué ventajas y desventajas tiene en comparación con el uso de SQL puro.

5.3 Define modelos que representan una entidad especificando propiedades, tipos de datos y otras opciones acorde a la librería Sequelize: Debes poder definir correctamente un modelo Sequelize que represente a la clase `User` y se alinee con la estructura de la base de datos.

5.4 Implementa operaciones CRUD en un programa Node.js para la manipulación de datos acorde a la librería Sequelize: Debes poder realizar operaciones CRUD en la base de datos utilizando Sequelize. Tu aplicación debe ser capaz de crear, leer, actualizar y eliminar registros en la base de datos de MySQL.

¡Buena suerte!