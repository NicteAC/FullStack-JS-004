require("dotenv").config()
//1
const nodemailer = require("nodemailer");

//2
let transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user:  process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
//3
let mailOptions = {
  from:  process.env.SMTP_USER,
  to:  process.env.SMTP_FROM,
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
