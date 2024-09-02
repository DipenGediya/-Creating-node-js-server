const http = require("http");
const express = require("express")

let app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Index Page');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Us Page');
});

app.get('/product', (req, res) => {
    res.send('Our Product Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us Page');
});
http.createServer(app).listen(3001, () => {
    console.log("server started");
})