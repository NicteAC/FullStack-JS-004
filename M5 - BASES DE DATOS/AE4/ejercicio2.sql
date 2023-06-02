create database Tienda;

use Tienda;

CREATE TABLE
    Productos (
        ID INT PRIMARY KEY,
        Nombre VARCHAR(100),
        Precio DECIMAL(10, 2),
        Categoria VARCHAR(50)
    );

-- Creación de la tabla "Pedidos"
CREATE TABLE
    Pedidos (
        ID INT PRIMARY KEY,
        Fecha DATETIME,
        Cliente VARCHAR(50),
        Total DECIMAL(10, 2)
    );

-- Creación de la tabla "DetallesPedidos"
CREATE TABLE
    DetallesPedidos (
        ID_Pedido INT,
        ID_Producto INT,
        Cantidad INT,
        Precio_Unitario DECIMAL(10, 2),
        FOREIGN KEY (ID_Pedido) REFERENCES Pedidos (ID),
        FOREIGN KEY (ID_Producto) REFERENCES Productos (ID)
    );

-- Inserción de registros en la tabla "Productos"
INSERT INTO
    Productos (ID, Nombre, Precio, Categoria)
VALUES
    (1, 'Camiseta', 19.99, 'Ropa'),
    (2, 'Zapatos', 59.99, 'Calzado'),
    (3, 'Pantalón', 29.99, 'Ropa'),
    (4, 'Bolso', 39.99, 'Accesorios'),
    (5, 'Gafas de sol', 24.99, 'Accesorios'),
    (6, 'Reloj', 99.99, 'Accesorios'),
    (7, 'Mochila', 49.99, 'Accesorios'),
    (8, 'Vestido', 39.99, 'Ropa'),
    (9, 'Sombrero', 14.99, 'Accesorios'),
    (10, 'Bufanda', 9.99, 'Accesorios');

-- Inserción de registros en la tabla "Pedidos"
INSERT INTO
    Pedidos (ID, Fecha, Cliente, Total)
VALUES
    (1, '2023-05-01 10:30:00', 'Cliente A', 50.99),
    (2, '2023-05-02 14:15:00', 'Cliente B', 100.75),
    (3, '2023-05-03 09:45:00', 'Cliente C', 75.50),
    (4, '2023-05-04 16:20:00', 'Cliente A', 35.25),
    (5, '2023-05-05 11:10:00', 'Cliente D', 60.90),
    (6, '2023-05-06 13:45:00', 'Cliente B', 80.25),
    (7, '2023-05-07 17:30:00', 'Cliente C', 45.75),
    (8, '2023-05-08 10:00:00', 'Cliente D', 95.00),
    (9, '2023-05-09 12:20:00', 'Cliente A', 70.50),
    (10, '2023-05-10 15:15:00', 'Cliente B', 120.80);

INSERT INTO
    DetallesPedidos (ID_Pedido, ID_Producto, Cantidad, Precio_Unitario)
VALUES
    (1, 1, 2, 19.99),
    (1, 3, 1, 29.99),
    (2, 2, 1, 59.99),
    (3, 4, 3, 39.99),
    (3, 5, 2, 24.99),
    (4, 1, 1, 19.99),
    (4, 3, 2, 29.99),
    (5, 6, 1, 99.99),
    (6, 8, 1, 39.99),
    (7, 9, 2, 14.99);

-- 2
select
    *
from
    pedidos
where
    month(Fecha) = 5
    and year(Fecha) = 2023;

-- 3
select
    DetallesPedidos.ID_Pedido,
    DetallesPedidos.ID_Producto,
    DetallesPedidos.Cantidad,
    DetallesPedidos.Precio_Unitario,
    Productos.ID,
    Productos.Nombre,
    Productos.Precio,
    Productos.Categoria
from
    DetallesPedidos
    join Productos on DetallesPedidos.ID_Producto = Productos.ID;

-- 4
SELECT
    Productos.Categoria,
    SUM(
        DetallesPedidos.Cantidad * DetallesPedidos.Precio_Unitario
    ) AS Total_Ventas
FROM
    DetallesPedidos
    JOIN Pedidos ON DetallesPedidos.ID_Pedido = Pedidos.ID
    JOIN Productos ON DetallesPedidos.ID_Producto = Productos.ID
WHERE
    MONTH(Pedidos.Fecha) = 5
    AND YEAR(Pedidos.Fecha) = 2023
GROUP BY
    Productos.Categoria;