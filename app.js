const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes'); // Import auth routes


const app = express();
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json());// middleware to parse JSON request bodies
//dummy api endpoint to test if the backend is working
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});


app.use('/api/auth', authRoutes); // Use auth routes with the '/api' prefix
module.exports = app; //  THIS LINE IS CRITICAL