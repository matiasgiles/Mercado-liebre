const express = require('express')
const app = express()
const port= process.env.PORT || 3000;


const path = require('path');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require ('./routes/userRoutes')
const methodOverride = require('method-override');
const publicPath =path.resolve (__dirname, "./public");

app.set('view engine', 'ejs')
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen (port,() => console.log("servidor corriendo en el puerto 3000"))


app.get('/', (req, res) => {res.render('home.ejs')})
app.use ("/products", productRoutes)
app.use('/user', userRoutes)

