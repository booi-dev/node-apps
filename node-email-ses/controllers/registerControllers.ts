import { Request, Response } from "express";
import sendConfirmationMail from "../utils/nodemailer";

export const create = async (req: Request, res: Response) => {
  const { email, name } = req.body;

  if (email && name) {
    sendConfirmationMail(email, name);
  }

  res.json({ yo: "yominji", email, name });
};
