const nodemailer = require("nodemailer");

function enviar(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "fullstackjs.example@outlook.es",
      pass: "ad-jscript-0004",
    },
  });
  let mailOptions = {
    from: "fullstackjs.example@outlook.es",
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
