const express = require('express')
const app = express()
const port= process.env.PORT || 3000;

const path = require('path');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require ('./routes/userRoutes')

const publicPath =path.resolve (__dirname, "./public");
app.use(express.static(publicPath));

app.listen (port,() => console.log("servidor corriendo en el puerto 3000"))

app.use ("/products", productRoutes)
app.use('/user', userRoutes)

