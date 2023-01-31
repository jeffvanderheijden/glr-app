const express = require('express');
const app = express();
const port = 3001;

const jsonwebtoken = require("jsonwebtoken");
const bodyParser = require('body-parser');
const axios = require('axios');
// mock data for users, replace with database
const user = require('./database/user/user');

// JWT Secret
const JWT_SECRET = "z!h6p8xLfet!Ec-iCl#*";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// CORS 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Login authentication
app.post('/auth/login', (req, res) => {
    // TODO: x amount of tries per IP address
    const { email, password } = req.body;
    const foundUser = user.users.filter(user => user.email === email);
    if(foundUser.length > 0 && foundUser[0].password === password) {
        // Correct login, create JWT and return it in the response
        const token = jsonwebtoken.sign({ 
            id: foundUser[0].id, 
            user: foundUser[0].email, 
            role: foundUser[0].role 
        }, JWT_SECRET, { expiresIn: '12h' });
        return res.json({ token: token });
    } else {
        // Incorrect login, return unauthorized error
        return res.status(401).json({ message: "Unauthorized login attempt." })
    }
});

// Verifies JWT token
app.post('/auth/token', (req, res) => {
    const token = req.token;

    if (token) {
        // const token = authHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
        });
    } else {
        res.sendStatus(401);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})