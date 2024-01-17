const axios = require('axios');

const apiKey = ' f84f8f73db7b45acb22112039240301';
const city = 'cuttack'; // Replace with your desired city..

const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function fetchWeatherData() {
  try {
    const response = await axios.get(apiUrl);

    // Handle the response data
    console.log('Weather Data:', response.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching weather data:', error.message);
  }
}

module.exports =  fetchWeatherData;
