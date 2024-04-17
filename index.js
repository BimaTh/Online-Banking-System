const express = require("express");
const app = express();
const session = require('express-session');

const crypto = require('crypto');

function generateRandomString(length) {
    const buffer = crypto.randomBytes(length);
    const randomString = buffer.toString('hex');
    return randomString;
}


app.use(express.static("public"));


app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/login.html");
});

app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/home.html");
});

app.get("/template", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/template.html");
});
app.listen(3002, function () {
    console.log("Server is running on localhost3002");
});


// app.use(session({
//     secret: generateRandomString(32),
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));

// app.post('/login', (req, res) => {
    
//     if (validCredentials) {
//         req.session.userId = userId; // Set session identifier
//         res.redirect('/dashboard');
//     } else {
//         res.render('login', { error: 'Invalid username or password' });
//     }
// });