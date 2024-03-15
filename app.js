const nodemailer = require("nodemailer");
require("dotenv").config();

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adarshvijayan7711@gmail.com",
    pass: process.env.PASS,
  },
});

const details = {
  from: "adarshvijayan7711@gmail.com",
  to: "akashvp96@gmail.com",
  subject: "Test mail from Nodemailer",
  text: "This is a test mail!",
};

mailTransporter.sendMail(details, (error) => {
  if (error) {
    console.error("Error occurred: ", error);
  } else {
    console.log("Email has sent successfully");
  }
});
