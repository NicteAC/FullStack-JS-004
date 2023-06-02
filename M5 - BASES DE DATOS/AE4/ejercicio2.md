# Ejercicio

## Supongamos que tenemos una base de datos de una tienda en línea que contiene las siguientes tablas:

- Tabla "Productos" con los campos: ID (identificador único), Nombre (cadena de caracteres), Precio (decimal) y Categoría (cadena de caracteres).

- Tabla "Pedidos" con los campos: ID (identificador único), Fecha (fecha y hora), Cliente (cadena de caracteres) y Total (decimal).

- Tabla "DetallesPedidos" con los campos: ID_Pedido (identificador del pedido al que pertenece), ID_Producto (identificador del producto), Cantidad (entero) y Precio_Unitario (decimal).

A continuación, se presenta el problema a resolver:

Se necesita obtener el total de ventas realizadas por categoría de productos en el mes de mayo de 2023. El resultado debe mostrar la categoría y el total de ventas correspondiente.

El objetivo es completar los siguientes pasos:

1. Identificar los elementos fundamentales del lenguaje SQL necesarios para resolver el problema planteado.

 - SELECT: para seleccionar los campos que queremos obtener en el resultado.
- FROM: para especificar las tablas de las cuales queremos obtener los datos.
- WHERE: para aplicar condiciones de selección y filtrar los datos.
- JOIN: para combinar las tablas relacionadas y obtener información conjunta.
- GROUP BY: para agrupar los datos por una columna específica.
- SUM: para calcular la suma de un conjunto de valores.


2. Escribir una sentencia SQL que utilice condiciones de selección para filtrar los pedidos realizados en el mes de mayo de 2023.

3. Escribir una sentencia SQL que utilice la cláusula JOIN para combinar las tablas "DetallesPedidos" y "Productos" y obtener información relacionada.

4. Escribir una sentencia SQL que utilice una función de agrupación para agrupar los datos por categoría de productos y calcular el total de ventas correspondiente.

Recuerda utilizar la sintaxis correcta y considerar las relaciones entre las tablas para obtener la información requerida.