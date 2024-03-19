const express = require('express');
const axios = require('axios');
const weatherApiConfig = require('../config/weatherApi');
const router = express.Router();

// Route to get weather data for a specific city.
router.get('/:city', async (req, res) => {
  const { city } = req.params;

  try {
    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      res.status(error.response.status).json({ error: 'Axios Error', message: error.message });
    } else {
      console.error('Non-Axios error:', error.message);
      res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
  }
});

// Function to fetch weather data from the API.
async function getWeatherData(city) {
  const response = await axios.get(weatherApiConfig.baseUrl, {
    params: {
      q: city,
    },
    headers: {
      'Authorization': `Bearer ${weatherApiConfig.apiKey}`,
    },
  });

  return response.data;
}
 
module.exports = router;
