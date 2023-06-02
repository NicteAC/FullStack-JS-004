create table nombre_tabla(
    columna1 tipo_dato restricciones,
    columna2 tipo_dato restricciones,
    primary key (columna_primaria)
    );


create table libros (
    ID int primary key not null,
    Titulo varchar(100),
    Autor varchar(50),
    Anio_Publicacion int,
    Categoria varchar(50),
    ISBN varchar(20),
    Editorial varchar(50)
);

alter table libros add disponible tinyint(1);