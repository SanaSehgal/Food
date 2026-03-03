const foodPartnerModel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token; // Get the token from cookies
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' }); // If no token is provided, send an unauthorized response
    }
    try {
        const decoded = jwt.verify(token, '5f609a2e1655d972873508c98b199571'); // Verify the token using the secret key
        const foodPartner = await foodPartnerModel.findById(decoded.id); // Find the food partner in the database using the decoded token ID
        req.foodPartner = foodPartner; // Attach the food partner to the response object for use in subsequent middleware or route handlers
        next(); // Call the next middleware or route handler
    }
 catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' }); // If token verification fails, send an unauthorized response
    }       
}
module.exports = {authFoodPartnerMiddleware}; // Export the middleware function for use in other parts of the application
