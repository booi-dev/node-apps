"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fromEmailAddress = process.env.FROM_EMAIL;
const smtpHost = (_a = process.env.STMP_HOST) !== null && _a !== void 0 ? _a : "";
const smtpPort = parseInt((_b = process.env.STMP_PORT) !== null && _b !== void 0 ? _b : "587", 10);
const smtpUser = (_c = process.env.STMP_USER) !== null && _c !== void 0 ? _c : "";
const smtpPassword = (_d = process.env.STMP_PASSWORD) !== null && _d !== void 0 ? _d : "";
console.log(fromEmailAddress);
const smtpTransport = nodemailer_1.default.createTransport({
    host: smtpHost,
    port: smtpPort,
    auth: {
        user: smtpUser,
        pass: smtpPassword,
    },
});
const sendConfirmationMail = (email, name) => {
    const mailOptions = {
        from: fromEmailAddress,
        to: email,
        subject: "Sending Email using Node.js",
        text: `Hi, ${name} at ${email}`,
    };
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
};
exports.default = sendConfirmationMail;
