CREATE DATABASE SalonDeBelleza;

USE SalonDeBelleza;

CREATE TABLE Peluquero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    especialidad VARCHAR(255)
);

CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    telefono VARCHAR(255),
    correo VARCHAR(255)
);

CREATE TABLE Cita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    servicio VARCHAR(255) NOT NULL,
    peluqueroId INT,
    clienteId INT,
    FOREIGN KEY (peluqueroId) REFERENCES Peluquero(id),
    FOREIGN KEY (clienteId) REFERENCES Cliente(id)
);

INSERT INTO Peluquero (nombre, especialidad) VALUES
('Juan Pérez', 'Corte de pelo'),
('Ana Gómez', 'Coloración'),
('Carlos Martínez', 'Estilizado'),
('Laura Rodríguez', 'Permanentes'),
('Pedro Vargas', 'Tratamientos capilares'),
('Fernanda Ramírez', 'Barbería'),
('Sergio Torres', 'Extensiones de cabello'),
('Carmen Morales', 'Corte de pelo'),
('Luis Guzmán', 'Coloración'),
('Daniela Vega', 'Estilizado');

INSERT INTO Cliente (nombre, telefono, correo) VALUES
('Patricia Solis', '1234567890', 'patricia.solis@example.com'),
('Oscar Ruiz', '2345678901', 'oscar.ruiz@example.com'),
('Marta Herrera', '3456789012', 'marta.herrera@example.com'),
('Federico Juarez', '4567890123', 'federico.juarez@example.com'),
('Liliana Paredes', '5678901234', 'liliana.paredes@example.com'),
('Rodrigo Ortega', '6789012345', 'rodrigo.ortega@example.com'),
('Beatriz Salazar', '7890123456', 'beatriz.salazar@example.com'),
('Enrique Cisneros', '8901234567', 'enrique.cisneros@example.com'),
('Diana Alvarado', '9012345678', 'diana.alvarado@example.com'),
('Miguel Palacios', '0123456789', 'miguel.palacios@example.com');

INSERT INTO Cita (fecha, hora, servicio, peluqueroId, clienteId) VALUES
('2023-10-01', '10:00:00', 'Corte de pelo', 1, 1),
('2023-10-01', '11:00:00', 'Estilizado', 2, 2),
('2023-10-01', '12:00:00', 'Barbería', 3, 3),
('2023-10-02', '10:00:00', 'Corte de pelo', 4, 4),
('2023-10-02', '11:00:00', 'Tratamientos capilares', 5, 5),
('2023-10-02', '12:00:00', 'Coloración', 6, 6),
('2023-10-03', '10:00:00', 'Estilizado', 7, 7),
('2023-10-03', '11:00:00', 'Corte de pelo', 8, 8),
('2023-10-03', '12:00:00', 'Coloración', 9, 9),
('2023-10-04', '10:00:00', 'Barbería', 10, 10);