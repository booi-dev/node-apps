import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const fromEmailAddress = process.env.FROM_EMAIL;
const smtpHost = process.env.STMP_HOST ?? "";
const smtpPort = parseInt(process.env.STMP_PORT ?? "587", 10);
const smtpUser = process.env.STMP_USER ?? "";
const smtpPassword = process.env.STMP_PASSWORD ?? "";

console.log(fromEmailAddress);

const smtpTransport = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});

const sendConfirmationMail = (email: string, name: string) => {
  const mailOptions = {
    from: fromEmailAddress,
    to: email,
    subject: "Sending Email using Node.js",
    text: `Hi, ${name} at ${email}`,
  };

  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendConfirmationMail;
