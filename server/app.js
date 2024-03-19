const express = require('express');
const mongoose = require('mongoose');
const cors = require('cores');
const connectDB = require('./db')
const dotenv = require('dotenv')
PORT = process.env.PORT || 4001
const SerchCity = require('./routes/SearchCity');

const app = express();
const weatherRoutes = require('./routes/weather');
const WeatherForecast =  require('./routes/WeatherForecast');

console.log(connectDB());
dotenv.config();

app.get('/', (req,res)=> {
    res.send("Hello from AeroVue team :)");
})

// Use  the weather routes.
app.use('/weather', weatherRoutes)
app.use('/weather', WeatherForecast);
app.use('/weather', SerchCity)
connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})