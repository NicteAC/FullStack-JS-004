# ==Modularización== en JavaScript:

- La modularización es una técnica que nos permite dividir nuestro código en módulos más pequeños y reutilizables.
- Los módulos nos ayudan a organizar nuestro código de manera más estructurada y a evitar la contaminación del espacio global.
- En JavaScript, podemos utilizar módulos en entornos de desarrollo modernos como Node.js o en navegadores compatibles con los módulos ES6.

Ejemplo de uso de la modularización en JavaScript:

`Módulo "math.js":`

```js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

`Módulo principal "app.js":`

```js
import { sum, multiply } from "./math.js";

console.log(sum(5, 3)); // Output: 8
console.log(multiply(2, 4)); // Output: 8
```

En este ejemplo, hemos creado un módulo "math.js" que exporta las funciones sum y multiply. Luego, en el módulo principal "app.js", importamos estas funciones utilizando la sintaxis ==import== y las utilizamos en nuestro código.

### _Otras formas_

```js
// otro-1.js
export const nombre = "pedrito";
export const edad = 15;

// app.js
import { nombre, edad } from "./otro-1.js";
console.log(nombre, edad);
```
---

```js
// otro-1.js
const nombre = "pedrito";
const edad = 15;
export { nombre, edad };
```

```js
// app.js
const nombre = "pedrito";
const edad = 15;
export default function pintarInfo() {
  console.log(nombre, edad);
}
export { nombre, edad };
```
---

```js
import { nombre, edad } from "./otro-1.js";
import pintarInfo from "./otro-1.js";
// import pintarInfo, { nombre, edad } from "./otro-1.js";
pintarInfo();
```
Solo puede existir un único export default en tu módulo.

`Cómo solo existe uno puedes indicar un alias:`

```js
import cualquierNombre from "./otro-1.js";
cualquierNombre();
```

## _con Clases_

```js
// otro-1.js
export class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  pintarNombre() {
    console.log(this.nombre);
  }
}
```

```js
// app.js
import { Persona } from "./otro-1.js";
const juanito = new Persona("juanito");
juanito.pintarNombre();
```

## _export con alias_

```js
// app.js
import { nombre as nombreOtro, edad as edadOtro } from "./otro-1.js";
import cualquierNombre from "./otro-1.js";

cualquierNombre();
console.log(nombreOtro, edadOtro);
```

## _Funciones de Flecha:_

```js
// otro-1.js
export const nombreUppercase = () => {
  console.log(nombre.toLocaleUpperCase());
};
// app.js
import { nombreUppercase } from "./otro-1.js";
nombreUppercase();
```

La modularización nos permite dividir nuestro código en módulos independientes y reutilizables, lo cual facilita el mantenimiento y la escalabilidad de nuestras aplicaciones.
