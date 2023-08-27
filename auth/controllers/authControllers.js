const User = require("../models/User")
const jwt = require("jsonwebtoken")

// handle errors
const handleErrors = (err) => {
    console.log(err.message)
    let errors = { email: "", password: "" }

    // dublicate error
    if (err.code === 11000) {
        errors.email = "Email already in used."
    }

    if (err.message === 'incorrect email') {
        errors.email = "that email is not registered."
    }

    if (err.message === 'incorrect password') {
        errors.password = "incorrect password."
    }

    // validation errors
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(properties)
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}

const MAX_AGE = 3 * 24 * 60 * 60

const createToken = (id) => {
    return jwt.sign({ id }, "wutang secret", {
        expiresIn: MAX_AGE
    })
}

// import the secret from env

module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE * 1000 })
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }

}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE * 1000 })
        res.status(200).json({ user: user._id })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.logout_get = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect("/")
}