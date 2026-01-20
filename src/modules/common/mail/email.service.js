require("dotenv").config();
const nodemailer = require("nodemailer");

class EmailService {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use true for port 465, false for port 587
      auth: {
        user: "rabinpjpt@gmail.com",
        pass: "knnx nsfk uker qqrb",
      },
    });
  }
  sendEmail = async (to, sub, message) => {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM_ADDRESS,
        to: to,
        subject: "User Activation",
        text: message, // Plain-text version of the message
        html: message,
      });
    } catch (error) {
      console.log(error);
      throw error;
      // next({ code: 422, message: error.message, meta: null });
    }
  };
}

module.exports = EmailService;
