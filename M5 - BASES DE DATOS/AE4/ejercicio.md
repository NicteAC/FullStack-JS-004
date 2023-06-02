# Ejercicio

## Supongamos que tenemos el siguiente requerimiento:

"Se necesita crear una base de datos para gestionar información de una biblioteca. La base de datos debe incluir una tabla llamada 'Libros' con los siguientes campos:

- ID: Identificador único del libro (entero).
- Título: Título del libro (cadena de caracteres, máximo 100 caracteres).
- Autor: Nombre del autor del libro (cadena de caracteres, máximo 50 caracteres).
- Año_Publicación: Año de publicación del libro (entero de 4 dígitos).
- Categoría: Categoría a la que pertenece el libro (cadena de caracteres, máximo 50 caracteres).
- ISBN: Número ISBN del libro (cadena de caracteres, máximo 20 caracteres).
- Editorial: Editorial del libro (cadena de caracteres, máximo 50 caracteres).

Además, se requiere que el campo 'ID' sea la llave primaria de la tabla 'Libros'."

**Tu tarea es completar los siguientes pasos:**

1. Reconoce la sintaxis básica para la creación de expresiones DDL que resuelven el requerimiento de definición de datos.

2. Construye la sentencia de creación de la tabla 'Libros' utilizando DDL y definiendo los campos, tipos de datos, restricciones de nulidad y la llave primaria de acuerdo al modelo de datos existente y el requerimiento mencionado.

3. Construye una sentencia utilizando DDL para modificar la tabla 'Libros' y agregar un nuevo campo llamado 'Disponible' de tipo booleano (1 para indicar que el libro está disponible y 0 para indicar que está prestado).