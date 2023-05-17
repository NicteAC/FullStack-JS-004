# Introducción

En esta clase, exploramos un concepto fundamental de JavaScript: El diagrama de clases. Aprenderemos cómo utilizar estos conceptos para representar la estructura y la organización de la información en JavaScript.

I. Diagrama de Clases

- Definición de un Diagrama de Clases:
  > Es un tipo de diagrama de estructura estática que describe la estructura de un sistema mostrando las clases del sistema, sus atributos, operaciones (o métodos), y las relaciones entre los objetos.
- Representación visual de las clases y sus relaciones en un diagrama de clases.
  > ![Diagrama de clases](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/KP-UML-Aggregation-20060420.svg/1920px-KP-UML-Aggregation-20060420.svg.png)

II. Clases en JavaScript

> En JavaScript, las clases se implementan utilizando la sintaxis de clase introducida en ECMAScript 2015 (ES6). Esta sintaxis proporciona una forma más clara y orientada a objetos de definir y crear objetos en JavaScript. Veamos cómo se utiliza esta sintaxis para crear clases en JavaScript:

- Declaración de la clase:
  Para declarar una clase en JavaScript, utilizamos la palabra clave class, seguida del nombre de la clase. Por ejemplo:

```sh
class Persona {
  // contenido de la clase
}
```

- Constructor de la clase:
  El constructor es un método especial dentro de una clase que se utiliza para inicializar los objetos creados a partir de la clase. Se define utilizando la palabra clave constructor. Por ejemplo:

```sh
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

 En el ejemplo anterior, el constructor de la clase Persona acepta dos parámetros (nombre y edad) y asigna esos valores a las propiedades nombre y edad del objeto.

- Métodos de la clase:
  Los métodos son funciones definidas dentro de una clase y se utilizan para realizar operaciones en los objetos creados a partir de la clase. Se definen como funciones dentro del cuerpo de la clase. Por ejemplo:

```sh
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }

  obtenerEdad() {
    return this.edad;
  }
}
```
 En el ejemplo anterior, se han definido dos métodos: saludar() y obtenerEdad(). El método saludar() muestra un mensaje de saludo en la consola utilizando el valor de la propiedad nombre del objeto. El método obtenerEdad() devuelve el valor de la propiedad edad del objeto.

- Instanciación de la clase:
Para crear instancias u objetos de una clase, utilizamos la palabra clave new, seguida del nombre de la clase y los parámetros necesarios para el constructor. Por ejemplo:
```sh
const persona1 = new Persona("Juan", 25);
```
En el ejemplo anterior, se ha creado una instancia de la clase Persona llamada persona1 con los valores "Juan" y 25 pasados al constructor.

- Uso de los métodos y propiedades:
Una vez que se ha creado una instancia de la clase, podemos acceder a los métodos y propiedades utilizando la notación de punto. Por ejemplo:

```sh
console.log(persona1.nombre); // Salida: "Juan"
persona1.saludar(); // Salida: "Hola, mi nombre es Juan"
console.log(persona1.obtenerEdad()); // Salida: 25
```
En el ejemplo anterior, se accede a la propiedad nombre y se llama a los métodos saludar() y obtenerEdad() de la instancia persona1 de la clase Persona.

- Para utilizar la herencia de clases en JavaScript, puedes utilizar la palabra clave extends. Esto te permite crear una clase hija que hereda propiedades y métodos de una clase padre. Aquí tienes un ejemplo:

```sh
class Empleado extends Persona {
  constructor(nombre, edad, salario) {
    super(nombre, edad);
    this.salario = salario;
  }

  mostrarSalario() {
    console.log(`Mi salario es ${this.salario}`);
  }
}
```
En este ejemplo, se ha creado la clase Empleado que extiende de la clase Persona. La clase Empleado hereda los atributos nombre y edad de la clase Persona utilizando la función super(). Además, se ha añadido el atributo salario específico de la clase Empleado y el método mostrarSalario().
