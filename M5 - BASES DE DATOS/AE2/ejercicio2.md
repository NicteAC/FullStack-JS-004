## Ejercicio 2

- Crea un usuario diferente a "root" con los permisos necesarios para realizar la tarea llamado "trainner_user":

- Inicia sesión en MySQL con el usuario "root" y crea una base de datos con un nombre "TrainingApp"

- Selecciona la base de datos recién creada:

- Crea la tabla con los campos especificados:

> Tabla instructores;
    instructor_id,
    nombre,
    apellido,
    direccion,
    correo_electronico,
    fecha_creacion_cuenta

> Tabla alumnos:
    alumno_id,
    nombre,
    apellido,
    correo_electronico,
    telefono,
    fecha_creacion_cuenta

> Tabla cursos:
    codigo_curso,
    nombre,
    horario,
    costo_realizacion,
    fecha_realizacion

- Inserta 10 registros en cada tabla.
- Obtener el costo total de realización de todos los cursos registrados.
- Mostrar los 5 instructores más recientemente registrados.
- Mostrar los 5 alumnos más recientemente registrados.
- Calcular cuántos días han transcurrido desde que se registraron los instructores y los alumnos.
- Calcular cuántos días han transcurrido desde que se realizó el último curso.
- Obtener el curso más costoso.
- Obtener el curso menos costoso.
