require("dotenv").config();
const nodemailer = require("nodemailer");

class EmailService {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE, // Use true for port 465, false for port 587
      auth: {
        user: process.env.SMTP_AUTH_USERNAME,
        pass: process.env.SMTP_AUTH_PASSWORD,
      },
    });
  }
  sendEmail = async (to, sub, message) => {
    try {
      await this.transporter.sendMail({
        from: "no-reply@gmail.com",
        to: "rbnpjpt@gmail.com",
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
