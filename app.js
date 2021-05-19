const express = require('express')
const app = express()
const port= process.env.PORT || 3000;

const path = require('path');


const publicPath =path.resolve (__dirname, "./public");
app.use(express.static(publicPath));

app.listen (port,() => console.log("servidor corriendo en el puerto 3000"))


app.get ("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get ("/register", (req, res)=> {
    res.sendFile(path.join(__dirname, "views/register.html"))
});

app.get ("/login", (req, res)=> {
    res.sendFile(path.join(__dirname, "views/login.html"))
});