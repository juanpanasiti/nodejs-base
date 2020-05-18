const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

//Middlewares
/* app.use('/', () =>{
    console.log('Middleware!');
    return next()
}) */


//Import Routes
const homeRoutes = require('./routes/home')
app.use('/home', homeRoutes)
//ROUTES
app.get('/', (req,res) => {
    res.send("HOME")
})

//Connect to DB
mongoose.connect(
    process.env.DB_CONN,
    { useNewUrlParser: true },
    () => console.log('Connected to MongoDB!')
)

//port
app.listen(3002)