const express = require("express");
const shortRoutes = require("./routes/shortRoutes");

const app = express();

const PORT = 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(shortRoutes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
