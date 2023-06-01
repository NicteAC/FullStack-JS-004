CREATE DATABASE Negocio;

USE Negocio;

CREATE TABLE
    Clientes (
        id INT PRIMARY KEY,
        nombre VARCHAR(50),
        email VARCHAR(100),
        telefono VARCHAR(20)
    );

CREATE TABLE 
    Pedidos (
        id INT PRIMARY KEY,
        descripcion VARCHAR(100),
        monto DECIMAL(10, 2),
        fecha DATE,
        cliente_id INT,
        FOREIGN KEY (cliente_id) REFERENCES Clientes (id)
    );

-- 1
INSERT INTO Clientes (nombre, email, telefono)
VALUES ('Juan Pérez', 'juan@example.com', '1234567890');
-- 2
UPDATE Clientes
SET email = 'juanperez@example.com'
WHERE nombre = 'Juan Pérez';
-- 3
DELETE FROM Pedidos
WHERE cliente_id IN (SELECT id FROM Clientes WHERE nombre = 'Juan Pérez');
-- 4
INSERT INTO Pedidos (descripcion, monto, fecha, cliente_id)
VALUES ('Orden 001', 100.00, '2023-05-30', (SELECT id FROM Clientes WHERE nombre = 'Juan Pérez'));