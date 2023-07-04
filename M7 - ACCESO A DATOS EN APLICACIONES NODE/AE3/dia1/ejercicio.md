# Ejercicio:

1. **Configura tu entorno de Node.js y MySQL:** Instala Node.js y MySQL en tu máquina si aún no lo has hecho. Configura una base de datos en MySQL para este ejercicio y asegúrate de que puedas conectarte a ella desde Node.js.

2. **Crea una tabla en tu base de datos MySQL:** Diseña y crea una tabla students con los siguientes campos: **id**, **nombre**, **edad** y **curso**.

3. **Implementa la inserción de datos:** Escribe una función en Node.js que inserte un nuevo estudiante en la tabla **students**. La función deberá aceptar los parámetros **name**, **age** y **grade**, y luego insertar estos datos en la base de datos. Asegúrate de usar la instrucción **INSERT** y el paso de parámetros.

    - Comprueba si la función devuelve la cantidad correcta de registros insertados.
    - Comprueba si la función devuelve correctamente el último id insertado.
4. **Implementa la actualización de datos:** Escribe otra función que actualice la información de un estudiante existente. La función deberá aceptar los parámetros **id**, **name**, **age** y **grade**, y luego actualizar estos datos en la base de datos. Asegúrate de usar la instrucción **UPDATE** y el paso de parámetros.

    - Comprueba si la función devuelve la cantidad correcta de registros actualizados.

5. **Implementa el borrado de datos:** Finalmente, escribe una función que elimine un estudiante existente de la base de datos. La función deberá aceptar el parámetro **id** y luego eliminar el registro correspondiente de la base de datos. Asegúrate de usar la instrucción **DELETE** y el paso de parámetros.

    - Comprueba si la función devuelve la cantidad correcta de registros eliminados.
6. **Manejo de errores:** Asegúrate de que todas las funciones manejen los errores de manera adecuada. Si algo sale mal durante una operación de la base de datos, la función deberá lanzar un error con un mensaje que explique qué salió mal.