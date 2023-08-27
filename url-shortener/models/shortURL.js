const mongoose = require("mongoose");
var { nanoid } = require("nanoid");
const retrieveHalf = require("../utils");

const shortURLSchema = new mongoose.Schema({
  full: {
    type: String,
    require: true,
  },
  short: {
    type: String,
    require: true,
    default: retrieveHalf(nanoid()),
  },
  clicks: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortURL", shortURLSchema);
