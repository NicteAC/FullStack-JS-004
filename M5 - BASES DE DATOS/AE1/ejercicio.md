
# Ejercicio.
- La empresa Ovalle Electronics SPA necesita una base de datos para almacenar sus productos y el historial de ventas del día a día. Crea una base de datos llamada OvalleElectronicsSPA con las siguientes tablas:
    |nombre| ID| fecha_creacion| proveedor| categoría|
    | ----------- | ----------- | ----------- | ----------- | ----------- |
    TV RV-25| 2468| 2020-08-16| Dende| SPA televisores

    |fecha| ID_Producto |cliente |metodo_pago|
    | ----------- | ----------- | ----------- | ----------- |
    2021-02-01| 2468| Bruce Lee| efectivo

---
- La empresa Ovalle Electronics SPA registró en la venta con referencia 43224 un
método de pago como “débito” y en una auditoría realizada recientemente se
comprobó que esa venta fue cancelada por el cliente con una tarjeta de “crédito”, por lo que se le pide al programador que se encarga de la base de datos hacer esa corrección. 

---

- La empresa Ovalle Electronics SPA decidió dejar de vender el televisor modelo RV-25, por lo que le pide al programador encargado de la base de datos que lo elimine del registro de los productos.

---

- La empresa Ovalle Electronics SPA decidió desestimar el almacenamiento de la
fecha de creación de los productos por lo que pide que esa propiedad sea eliminada y además solicita la creación de una nueva propiedad llamada “color” para futuros filtros de búsqueda.

---

- A la empresa Ovalle Electronics SPA le ha ido muy bien vendiendo televisores y ha empezado a contratar más personal por lo que consideró necesario tener en la base de datos un registro de sus empleados, almacenando su nombre, fecha de ingreso a la empresa, género y rut. Crea una tabla en la misma base de datos de los ejercicios propuestos, especificando que el rut es un valor único y que el nombre no puede ser un dato tipo null.

---

- La empresa Ovalle Electronics SPA se dio cuenta que se están generando registros con datos que ya existen en otra tabla, y para evitar esta redundancia innecesaria le pide a su programador en base de datos que cree la relación entre las tablas Productos y Ventas. Vuelve a crear estas tablas asignando la clave primaria y foránea.

---

- La empresa Ovalle Electronics SPA ha bajado drásticamente sus ventas, no obstante ha notado en sus empleados un nivel técnico excelente y ha tomado la decisión de dejar de vender productos y cambiar su modelo de negocios para ofrecer servicio técnico, por lo que ya no necesita seguir usando el registro de productos, así que le pide a su programador que elimine la tabla de productos de la base de datos.

---

- Luego de un éxito tremendo ofreciendo servicio técnico la empresa Ovalle
Electronics SPA ha logrado abrir una sucursal en otro estado del país, por lo que
generó una copia de la base de datos para ser usada en esta nueva sede, pero ahora
solicita al programador que vacíe la tabla de empleados para volver a llenarla pero
con los nuevos trabajadores.
