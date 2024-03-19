const express = require('express');
const axios = require('axios');
const weatherApiConfig = require('../config/weatherApi');
const router = express.Router();

// Route to get weather forecast for a specific city.
router.get('/:city/forecast', async (req, res) => {
    const { city } = req.params;

    try {
        const forecastData = await getForecastData(city);
        res.json(forecastData);
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

// Function to fetch weather forecast data from the API.
async function getForecastData(city) {
    const response = await axios.get(weatherApiConfig.baseUrl, {
        params: {
            q: city,
            forecast_days: 2 // You can adjust the number of forecast days as per your requirement
        },
        headers: {
            'Authorization': `Bearer ${weatherApiConfig.apiKey}`,
        },
    });

    return response.data;
}

module.exports = router;
