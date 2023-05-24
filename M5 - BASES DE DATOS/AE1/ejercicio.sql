-- La empresa **ElectroVision S.A.** necesita una base de datos para almacenar sus productos y el historial de ventas del día a día. 
-- Crea una base de datos llamada **ElectroVisionSA** con las siguientes tablas:
-- 
--  | nombre        | ID   | fecha_creacion | proveedor                       | categoría   |
--  | ------------- | ---- | -------------- | ------------------------------- | ----------- |
--  | Televisor LED | 1001 | 2022-01-15     | Techtronics Distributor         | Electrónica |
--  | Smart TV X100 | 1002 | 2022-02-20     | Visionary Electronics Solutions | Electrónica |
-- 
--  | fecha      | ID_Producto | cliente    | metodo_pago | referencia |
--  | ---------- | ----------- | ---------- | ----------- | ---------- |
--  | 2022-03-01 | 1001        | Juan Pérez | efectivo    | 34414      |
--  | 2022-03-15 | 1002        | Ana Gómez  | débito      | 43224      |
CREATE DATABASE ElectroVisionSA;

CREATE TABLE
    Productos (
        nombre VARCHAR(25),
        ID INT,
        fecha_creacion DATE,
        proveedor VARCHAR(25),
        categoria VARCHAR(25)
    );

INSERT INTO
    Productos (nombre, ID, fecha_creacion, proveedor, categoria)
VALUES
    (
        'Televisor LED',
        '1001',
        '2022-01-15',
        'Techtronics Distributor',
        '43224',
        'televisores'
    ),
    (
        'Smart TV X100',
        '1002',
        '2022-02-20',
        'Visionary Electronics Solutions',
        'televisores'
    );

CREATE TABLE
    Ventas (
        fecha DATE,
        ID_Producto INT,
        cliente VARCHAR(25),
        metodo_pago VARCHAR(25),
        referencia INT
    );

INSERT INTO
    Ventas (
        fecha,
        ID_Producto,
        cliente,
        metodo_pago,
        referencia
    )
VALUES
    (
        '2022-03-01',
        '1001',
        'Juan Pérez',
        'efectivo',
        '34414'
    ),
    (
        '2022-03-15',
        '1002',
        'Ana Gómez',
        'débito',
        '43224'
    );

-- La empresa **ElectroVision S.A.** registró en la venta con referencia 43224 un método de pago como “débito” y en una auditoría realizada 
-- recientemente se comprobó que esa venta fue cancelada por el cliente con una tarjeta de “crédito”, por lo que se le pide al programador 
-- que se encarga de la base de datos hacer esa corrección.
UPDATE Ventas
SET
    metodo_pago = 'credito'
WHERE
    referencia = '43224';

-- La empresa **ElectroVision S.A.** decidió dejar de vender el televisor modelo LED, por lo que le pide al programador encargado de la base 
-- de datos que lo elimine del registro de los productos.
DELETE FROM Productos
WHERE
    ID = '1001';

-- La empresa **ElectroVision S.A.** decidió desestimar el almacenamiento de la fecha de creación de los productos por lo que pide que esa 
-- propiedad sea eliminada y además solicita la creación de una nueva propiedad llamada “color” para futuros filtros de búsqueda.
ALTER TABLE Productos
DROP fecha_creacion;

ALTER TABLE Productos
ADD color VARCHAR(25);

-- A la empresa **ElectroVision S.A.** le ha ido muy bien vendiendo productos y ha empezado a contratar más personal por lo que consideró 
-- necesario tener en la base de datos un registro de sus empleados, almacenando su nombre, fecha de ingreso a la empresa, género y rut. 
-- Crea una tabla en la misma base de datos de los ejercicios propuestos, especificando que el rut es un valor único y que el nombre no puede 
-- ser un dato tipo null.
CREATE TABLE
    Empleados (
        nombre VARCHAR(25) NOT NULL,
        fecha_ingreso DATE,
        genero VARCHAR(25),
        rut VARCHAR(8) UNIQUE
    );

-- La empresa **ElectroVision S.A.** se dio cuenta que se están generando registros con datos que ya existen en otra tabla, y para evitar esta 
-- redundancia innecesaria le pide a su programador en base de datos que cree la relación entre las tablas Productos y Ventas. Vuelve a crear 
-- estas tablas asignando la clave primaria y foránea.
CREATE TABLE
    Productos (
        nombre VARCHAR(25),
        ID INT PRIMARY KEY,
        fecha_creacion DATE,
        proveedor VARCHAR(25),
        categoria VARCHAR(25)
    );

CREATE TABLE
    Ventas (
        fecha DATE,
        FOREIGN KEY (ID_Producto) REFERENCES Productos (ID),
        cliente VARCHAR(25),
        metodo_pago VARCHAR(25),
        referencia INT
    );

-- La empresa Ovalle Electronics SPA ha bajado drásticamente sus ventas, no obstante ha notado en sus empleados un nivel técnico excelente y 
-- ha tomado la decisión de dejar de vender productos y cambiar su modelo de negocios para ofrecer servicio técnico, por lo que ya no necesita 
-- seguir usando el registro de productos, así que le pide a su programador que elimine la tabla de productos de la base de datos.
DROP TABLE Productos;

-- Luego de un éxito tremendo ofreciendo servicio técnico la empresa **ElectroVision S.A.** ha logrado abrir una sucursal en otro estado del 
-- país, por lo que generó una copia de la base de datos para ser usada en esta nueva sede, pero ahora solicita al programador que vacíe la 
-- tabla de empleados para volver a llenarla pero con los nuevos trabajadores.
TRUNCATE TABLE Empleados;