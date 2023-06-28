require("dotenv").config();
const nodemailer = require("nodemailer");

function enviar(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  let mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log(err);
    if (data) console.log(data);
  });
}

module.exports = enviar;
