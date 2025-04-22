const mail = require("nodemailer");
require("dotenv").config();

// Initialize Mailer
var mailer = mail.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.FROM,
    pass: process.env.PASS,
  },
});

const sendMail = (data, callback) => {
  const newData = JSON.parse(data);
  const mailOptions = {
    from: process.env.PASS,
    to: process.env.TO,
    subject: "Portfolio Message",
    html: `<div>
      <h4>Name:</h4><h3>${newData.name}</h3>
      <h4>Email:</h4><h3>${newData.email}</h3>
      <h4>Message:</h4><h3>${newData.message}</h3>
    </div>`,
  };
  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, "Message sent Successfully");
    }
  });
};

module.exports = { sendMail };
