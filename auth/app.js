const express = require("express");
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes")
const cookieParser = require("cookie-parser")
const { requireAuth, checkUser } = require("./middleware/authMid")

const app = express()

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

//view engine
app.set('view engine', 'ejs')

// database connection
const dbURI = 'mongodb+srv://admin:mpassword@cluster0.qa9ep1o.mongodb.net/node-auth'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

// routes
app.get("*", checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'))
app.use(authRoutes)


// app.get('/set-cookie', (req, res) => {

//     //res.setHeader('Set-Cookie', 'newUse=true');

//     res.cookie('newUser', false)
//     res.cookie('greeting', 'hello', { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })

//     // secure : true - https only
//     // httpOnly - cannot access using js. Only http request.

//     res.send('you got cookies')

// })

// app.get('/read-cookie', (req, res) => {
//     const cookies = req.cookies;
//     console.log(cookies)
//     res.json(cookies)

// })