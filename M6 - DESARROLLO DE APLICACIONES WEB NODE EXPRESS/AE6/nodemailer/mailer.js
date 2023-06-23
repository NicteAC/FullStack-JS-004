const nodemailer = require("nodemailer");

function enviar(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "...",
      pass: "...",
    },
  });
  let mailOptions = {
    from: "...",
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
