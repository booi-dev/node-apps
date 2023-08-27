const mongoose = require("mongoose");
require("dotenv").config();
const ShortURL = require("../models/shortURL");

const mongoDBURI = process.env.MONGODB_URI;

mongoose.connect(mongoDBURI);

module.exports.shorten = async (req, res) => {
  await ShortURL.create({ full: req.body.fullURL });
  res.redirect("/");
};

module.exports.redirect = async (req, res) => {
  const shortURL = await req.params.shortURL;
  const shortenedURL = await ShortURL.findOne({ short: shortURL });

  if (shortenedURL == null) return res.sendStatus(404);

  shortenedURL.clicks++;
  shortenedURL.save();

  res.redirect(shortenedURL.full);
};
