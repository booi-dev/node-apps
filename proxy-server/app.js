const express = require("express");
const cors = require("cors");
require('dotenv').config()

const weatherRoutes = require("./routes/weatherRoutes")

const PORT = process.env.PORT || 3000;

const app = express();

//middleware

app.use(cors())


// rotues

app.get("/", (req, res) => {
    res.json({ home: true })
})
app.use(weatherRoutes)



app.listen(PORT, () => console.log(`server is one ${PORT}`))