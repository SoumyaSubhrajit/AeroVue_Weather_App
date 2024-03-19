const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to search for the weather info..

router.get('/search', async (req,res)=> {
    const{q} = req.query;
    const apiKey = 'f84f8f73db7b45acb22112039240301';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${q}`;

  try{
    const response = await axios.get(apiUrl);
    res.json(response.data)
  }catch(error){
    if(error.response && error.response.status === 400)
    {
        res.status(400).json({error: 'Bad request', message: error.response.data.error.message})
    }
    else if(error.response && error.response.status === 401){
   res.status(401).json({error: 'Unauthorized', message: error.response.data.error.message})
    }
    else{
        res.status(500).json({error: 'Internal Server Error', message: error.message})
    }
  }
})

module.exports = router;
