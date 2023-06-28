require("dotenv").config();
const { mostrar } = require("./api.js");
const fs = require("fs");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const template = async (text) => {
  return `${text} <br><br> ${await mostrar()}`;
};

const send = async ({ correos: to, asunto: subject, contenido: text }) => {
  const config = {
    from: `Seguimiento de pecadores <${process.env.MAIL_USER}>`,
    to,
    subject,
    html: await template(text),
  };
  fs.writeFileSync(`${uuidv4()}.json`, JSON.stringify(config));
  return await transporter.sendMail(config);
};

module.exports = { send };
