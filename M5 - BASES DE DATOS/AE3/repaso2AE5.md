## Descripción
En el siguiente caso, se deberá modelar la típica y genérica problemática de un sistema de ventas basado en una factura con datos de un cliente y sus productos.
Se recomienda asegurarse que el modelo final generado haya quedado en 3FN, para luego pasar a crear la base de datos y proceder con los requerimientos correspondientes sobre la misma.

Requerimientos
### Parte 1: Creación del modelo conceptual, lógico y físico para el siguiente caso
1. Una Factura pertenece a un cliente.
2. El cliente tiene id, nombre, rut y dirección.
3. Una factura tiene numero de factura, fecha de la factura, subtotal, iva y precio total.
4. Una factura tiene un listado de productos, con su precio unitario, cantidad, y valor total por producto.
5. Para la factura se deberá almacenar el subtotal de la factura, que corresponde a la suma de todos los valores unitarios multiplicado por la cantidad respectiva.
6. Cada producto tiene un id, un nombre, descripción, stock y un valor unitario
7. Cada producto pertenece a una categoría, la cual tiene un id, el nombre de la categoría y una descripción.


### Parte 2: Creando el modelo en la base de datos
Se debe crear el modelo en la base de datos, en una base de datos llamada tienda_de_electronica e insertar los siguientes registros:
1. 3 clientes.
2. 2 categorías.
3. 5 productos.
4. 3 facturas.
● 1 para el cliente 1, con 3 productos diferentes
● 1 para el cliente 2, con 2 productos diferentes
● 1 para el cliente 3, con 1 solo producto
Debes usar transacciones para el ingreso de las facturas.
Realizar las siguientes consultas:
5. ¿Cuál es el nombre del cliente que realizó la compra más cara?
6. ¿Cuáles son los nombres de los clientes que pagaron más de 60$? Considere un IVA
del 19%
7. ¿Cuántos clientes han comprado más de 5 productos? Considere la cantidad por
producto comprado
