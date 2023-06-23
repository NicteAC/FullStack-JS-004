//1
const nodemailer = require("nodemailer");

//2
let transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "fullstackjs.example@outlook.es",
    pass: "ad-jscript-0004",
  },
});
//3
let mailOptions = {
  from: "...",
  to: "...",
  subject: "Nodemailer Test 0004",
  html: `
    <h1>Estimad@ usuario</h1>
    <p>Se aprobó su crédito, necesitamos su usuario y contraseña</p>
  `,
};

//4
transporter.sendMail(mailOptions, (err, data) => {
  if (err) console.log(err);
  if (data) console.log(data);
});
