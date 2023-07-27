create database planificacionHidrica;

use planificacionHidrica;

create table
    usuarios (
        userID int auto_increment primary key,
        nombre varchar(100),
        email varchar(100) unique,
        contrasena varchar(100),
        tipoUsuario enum('Admin', 'Region')
    );

create table
    regiones (
        regionID int auto_increment primary key,
        nombre varchar(100),
        userID int,
        foreign key (userID) references usuarios (userID)
    );

create table
    solicitudes (
        solicitudID int auto_increment primary key,
        fechaSolicitud date not null,
        estado enum('No ajustada', 'Ajustada'),
        regionID int,
        foreign key (regionID) references regiones (regionID)
    );

create table
    detalleSolicitudes (
        detalleSolicitudID int auto_increment primary key,
        cantidadAguaSolicitada int not null,
        cantidadAguaConsumida int not null,
        observaciones varchar(1024),
        solicitudID int,
        foreign key (solicitudID) references solicitudes (solicitudID)
    );

create table
    opciones (
        opcionID int auto_increment primary key,
        nombreOpcion varchar(100)
    );

create table
    opcionesDetallesSolicitudes (
        opcionDetalleSolicitudID int auto_increment primary key,
        detalleSolicitudID int,
        opcionID int,
        foreign key (detalleSolicitudID) references detalleSolicitudes (detalleSolicitudID),
        foreign key (opcionID) references opciones (opcionID)
    );

create table
    anuncios (
        anuncioID int auto_increment primary key,
        titulo varchar(100),
        descripcion varchar(1024),
        fechaAnuncio date,
        userID int,
        foreign key (userID) references usuarios (userID)
    );


/*     columna_int INT CHECK (columna_int >= 0 AND columna_int <= 100) */