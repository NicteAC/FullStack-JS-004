# Mi primer envío de correo electrónico en Node

Desarrollar una aplicación básica que envíe un correo electrónico con el paquete nodemailer, pero antes deberás instalar el paquete, así que abre la consola y escribe el siguiente comando y luego sigue los siguientes pasas para llegar a la solución:

```bash
npm i nodemailer
```

Con esto tenemos todo listo para realizar nuestra primera prueba, sigue los pasos para hacer el envío de tu primer correo electrónico con nodemailer.

- Paso 1: Importar el paquete Nodemailer a una constante.
- Paso 2: Guardar en una variable “transporter” el llamado al método createTransport pasándole como configuración las siguientes propiedades:
  - service: gmail
  - auth:
    - user: 
    - pass: 
- Paso 3: Crear una variable “mailOptions” para definir las opciones del correo electrónico de prueba, las cuales serán las siguientes:
  - from: 
  - to: 
  - subject: Nodemailer Test
  - text: Probando... 1,2,3…
- Paso 4: Invoca el método sendMail de la instancia transporter pasándole como argumento las opciones del correo y en su segundo parámetro recibirás un callback, con el error y la data correspondiente al envío.

- Paso 5: Usa condicionales para imprimir por consola el error y la data correspondiente al envío en caso de existir.

```js
// Paso 1
const nodemailer = require("nodemailer");
// Paso 2
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});
// Paso 3
let mailOptions = {
  from: "",
  to: "",
  subject: "Nodemailer Test",
  text: "Probando... 1,2,3...",
};
// Paso 4
transporter.sendMail(mailOptions, (err, data) => {
  // Paso 5
  if (err) console.log(err);
  if (data) console.log(data);
});
```
