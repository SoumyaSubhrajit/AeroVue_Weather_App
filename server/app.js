const express = require('express');
const mongoose = require('mongoose');
const cors = require('cores');
const connectDB = require('./db');
const dotenv = require('dotenv')
PORT = process.env.PORT || 4001
const app = express();


dotenv.config();

app.get('/', (req,res)=> {
    res.send("Hello from AeroVue team :)");

})

connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})