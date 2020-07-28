const nodemailer = require("nodemailer");

const sendEmail = (email, lead) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "smart.challenge.felipe@gmail.com",
      pass: "smartchallenge",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //Agradecimentos
  transporter
    .sendMail({
      from: "Smart Challenge <smart.challenge.felipe@gmail.com>",
      to: email,
      subject: "Agradecimentos da Smart Envio",
      text:
        "Vimos que você teve interesse em nossa plataforma e gostaríamos de agradecer.",
    })

    .catch((error) => {
      console.log(error);
    });

  //Lead
  transporter
    .sendMail({
      from: "Smart Challenge <smart.challenge.felipe@gmail.com>",
      to: ["sdr@smartenvios.com"],
      subject: "Lead",
      text: JSON.stringify(lead),
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { sendEmail };
