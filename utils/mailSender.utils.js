import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// make a transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const mailSender = async (email, subject, body) => {
    try {
      await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: subject,
        html: body,
      });
      console.log(`Email sent successfully to ${email}`);
    } catch (error) {
      console.error(`Error sending email to ${email}:`, error);
    }
  };

export default mailSender;
