create database TrainingApp;

use TrainingApp;

create table
    instructores (
        instructor_id int primary key,
        nombre varchar(60),
        apellido varchar(60),
        direccion varchar(100),
        correo_electronico varchar(100),
        fecha_creacion_cuenta date
    );

create table
    alumnos (
        alumno_id int primary key,
        nombre varchar(60),
        apellido varchar(60),
        correo_electronico varchar(100),
        telefono varchar(60),
        fecha_creacion_cuenta date
    );

create table
    cursos (
        codigo_curso int primary key,
        nombre varchar(60),
        horario varchar(60),
        costo_realizacion decimal(10, 2),
        fecha_realizacion date
    );

INSERT INTO
    instructores (
        instructor_id,
        nombre,
        apellido,
        direccion,
        correo_electronico,
        fecha_creacion_cuenta
    )
VALUES
    (
        1,
        'Juan',
        'Perez',
        'Calle A',
        'juan@example.com',
        '2023-01-01'
    ),
    (
        2,
        'Maria',
        'Lopez',
        'Calle B',
        'maria@example.com',
        '2023-01-02'
    ),
    (
        3,
        'Pedro',
        'Gonzalez',
        'Calle C',
        'pedro@example.com',
        '2023-01-03'
    ),
    (
        4,
        'Laura',
        'Rodriguez',
        'Calle D',
        'laura@example.com',
        '2023-01-04'
    ),
    (
        5,
        'Carlos',
        'Sanchez',
        'Calle E',
        'carlos@example.com',
        '2023-01-05'
    ),
    (
        6,
        'Ana',
        'Torres',
        'Calle F',
        'ana@example.com',
        '2023-01-06'
    ),
    (
        7,
        'Luis',
        'Ramirez',
        'Calle G',
        'luis@example.com',
        '2023-01-07'
    ),
    (
        8,
        'Sofia',
        'Hernandez',
        'Calle H',
        'sofia@example.com',
        '2023-01-08'
    ),
    (
        9,
        'Diego',
        'Martinez',
        'Calle I',
        'diego@example.com',
        '2023-01-09'
    ),
    (
        10,
        'Valeria',
        'Vargas',
        'Calle J',
        'valeria@example.com',
        '2023-01-10'
    );

INSERT INTO
    alumnos (
        alumno_id,
        nombre,
        apellido,
        correo_electronico,
        telefono,
        fecha_creacion_cuenta
    )
VALUES
    (
        1,
        'Juan',
        'Perez',
        'juan@example.com',
        '123456789',
        '2023-01-01'
    ),
    (
        2,
        'Maria',
        'Lopez',
        'maria@example.com',
        '987654321',
        '2023-01-02'
    ),
    (
        3,
        'Pedro',
        'Gonzalez',
        'pedro@example.com',
        '456789123',
        '2023-01-03'
    ),
    (
        4,
        'Laura',
        'Rodriguez',
        'laura@example.com',
        '789123456',
        '2023-01-04'
    ),
    (
        5,
        'Carlos',
        'Sanchez',
        'carlos@example.com',
        '321654987',
        '2023-01-05'
    ),
    (
        6,
        'Ana',
        'Torres',
        'ana@example.com',
        '654987321',
        '2023-01-06'
    ),
    (
        7,
        'Luis',
        'Ramirez',
        'luis@example.com',
        '987321654',
        '2023-01-07'
    ),
    (
        8,
        'Sofia',
        'Hernandez',
        'sofia@example.com',
        '123987654',
        '2023-01-08'
    ),
    (
        9,
        'Diego',
        'Martinez',
        'diego@example.com',
        '987654123',
        '2023-01-09'
    ),
    (
        10,
        'Valeria',
        'Vargas',
        'valeria@example.com',
        '456123789',
        '2023-01-10'
    );

INSERT INTO
    cursos (
        codigo_curso,
        nombre,
        horario,
        costo_realizacion,
        fecha_realizacion
    )
VALUES
    (
        1,
        'Programación Básica',
        'Lunes a Viernes, 9:00-11:00',
        150.00,
        '2023-02-01'
    ),
    (
        2,
        'Diseño Gráfico Avanzado',
        'Martes y Jueves, 18:00-20:00',
        200.00,
        '2023-02-05'
    ),
    (
        3,
        'Inglés Intermedio',
        'Lunes y Miércoles, 16:00-18:00',
        100.00,
        '2023-02-10'
    ),
    (
        4,
        'Marketing Digital',
        'Viernes, 15:00-17:00',
        180.00,
        '2023-02-15'
    ),
    (
        5,
        'Administración de Proyectos',
        'Martes y Jueves, 10:00-12:00',
        250.00,
        '2023-02-20'
    ),
    (
        6,
        'Fotografía Profesional',
        'Miércoles, 14:00-16:00',
        120.00,
        '2023-02-25'
    ),
    (
        7,
        'Desarrollo Web Avanzado',
        'Lunes y Miércoles, 19:00-21:00',
        300.00,
        '2023-03-01'
    ),
    (
        8,
        'Contabilidad Financiera',
        'Martes y Jueves, 16:00-18:00',
        180.00,
        '2023-03-05'
    ),
    (
        9,
        'Arte y Cultura',
        'Viernes, 17:00-19:00',
        90.00,
        '2023-03-10'
    ),
    (
        10,
        'Liderazgo Empresarial',
        'Lunes y Miércoles, 18:00-20:00',
        220.00,
        '2023-03-15'
    );

select
    *
from
    alumnos;

select
    sum(costo_realizacion) as costo_total
from
    cursos;

select
    *
from
    instructores
order by
    fecha_creacion_cuenta desc
limit
    5;

select
    *
from
    alumnos
order by
    fecha_creacion_cuenta desc
limit
    5;

select
    instructor_id,
    datediff(curdate(), fecha_creacion_cuenta) as dias_transcurridos
from
    instructores;

select
    alumno_id,
    datediff(curdate(), fecha_creacion_cuenta) as dias_transcurridos
from
    alumnos;

select
    datediff(curdate(), max(fecha_realizacion)) as dias_transcurridos
from
    cursos;

select
    *
from
    cursos
where
    costo_realizacion = (
        select
            max(costo_realizacion)
        from
            cursos
    );

select
    *
from
    cursos
where
    costo_realizacion = (
        select
            min(costo_realizacion)
        from
            cursos
    );