const express = require('express');




const app = express();

app.get('/', (req,res)=> {
    res.send("Hello from AeroVue team");

})

PORT = 4000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})