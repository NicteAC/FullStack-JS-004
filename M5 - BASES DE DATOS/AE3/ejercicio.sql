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