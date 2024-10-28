// src/config.js
const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://portfolioserver-hc9a.onrender.com'  // Replace with your actual backend URL
    : 'http://localhost:5000';

export default API_URL;