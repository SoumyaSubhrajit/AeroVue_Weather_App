const express = require('express');
const mongoose = require('mongoose');
const cors = require('cores');
const connectDB = require('./db');
const dotenv = require('dotenv')
PORT = process.env.PORT || 4001
const fetchWeatherData = require('./api');
const app = express();
const weatherRoutes = require('./routes/weather');


dotenv.config();

app.get('/', (req,res)=> {
    res.send("Hello from AeroVue team :)");
})

// Use  the weather routes.
app.use('/weather', weatherRoutes)
connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})