const { Router } = require("express");
const shortControllers = require("../controller/shortControllers");
const ShortURL = require("../models/shortURL");

const router = Router();

router.get("/", async (req, res) => {
  const shortURLs = await ShortURL.find();
  res.render("index", { shortURLs });
});

router.post("/short", shortControllers.shorten);

router.get("/:shortURL", shortControllers.redirect);

module.exports = router;
