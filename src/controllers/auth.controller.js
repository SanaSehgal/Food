const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodpartner.model');

async function registerUser(req, res) {
    const { fullname, email, password } = req.body; // Destructure the request body to get user details
    // check if user already exists
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // In a real application, you should hash the password before storing it
    const user = await userModel.create({ fullname, email, password: hashedPassword }); // Create a new user in the database

    const token = jwt.sign({ id: user._id }, '5f609a2e1655d972873508c98b199571') // Generate a JWT token for the user
    res.cookie('token', token) 
    res.status(201).json({ message: 'User registered successfully', user:{_id:user._id, fullname:user.fullname, email:user.email} }); // Send a success response with the token
}

async function loginUser(req, res) {
    const { email, password } = req.body; // Destructure the request body to get login details
    const user = await userModel.findOne({ email }); // Find the user in the database by email
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' }); // If user is not found, send an error response
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); // Compare the provided password with the hashed password in the database
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' }); // If password is invalid, send an error response
    }
    const token = jwt.sign({ id: user._id }, '5f609a2e1655d972873508c98b199571') // Generate a JWT token for the user
    res.cookie('token', token) 
    res.status(200).json({ message: 'User logged in successfully', user:{_id:user._id, fullname:user.fullname, email:user.email} }); // Send a success response with the token
}

function logoutUser(req, res) {
    res.clearCookie('token'); // Clear the token cookie to log the user out
    res.status(200).json({ message: 'User logged out successfully' }); // Send a success response
}  
//FOODPARTNER
async function registerFoodPartner(req, res) {
   const { name, email, password } = req.body; // Destructure the request body to get food partner details
   // check if food partner already exists
   const isFoodPartnerExist = await foodPartnerModel.findOne({ email });
   if (isFoodPartnerExist) {
       return res.status(400).json({ message: 'Food Partner already exists' });
   }
   const hashedPassword = await bcrypt.hash(password, 10); // In a real application, you should hash the password before storing it
   const foodPartner = await foodPartnerModel.create({ name, email, password: hashedPassword }); // Create a new food partner in the database

   const token = jwt.sign({ id: foodPartner._id }, '5f609a2e1655d972873508c98b199571') // Generate a JWT token for the food partner
   res.cookie('token', token) 
   res.status(201).json({ message: 'Food Partner registered successfully', foodPartner:{_id:foodPartner._id, name:foodPartner.name, email:foodPartner.email} }); // Send a success response with the token
} 

async function loginFoodPartner(req, res) {
    const { email, password } = req.body;   // Destructure the request body to get login details
    const foodPartner = await foodPartnerModel.findOne({ email }); // Find the food partner in the database by email
    if (!foodPartner) {
        return res.status(400).json({ message: 'Invalid email or password' }); // If food partner is not found, send an error response
    }
    const isPasswordValid = await bcrypt.compare(password, foodPartner.password); // Compare the provided password with the hashed password in the database
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' }); // If password is invalid, send an error response
    }
    const token = jwt.sign({ id: foodPartner._id }, '5f609a2e1655d972873508c98b199571') // Generate a JWT token for the food partner
    res.cookie('token', token) 
    res.status(200).json({ message: 'Food Partner logged in successfully', foodPartner:{_id:foodPartner._id, name:foodPartner.name, email:foodPartner.email} }); // Send a success response with the token
}
function logoutFoodPartner(req, res) {
    res.clearCookie('token'); // Clear the token cookie to log the food partner out
    res.status(200).json({ message: 'Food Partner logged out successfully' }); // Send a success response
}
module.exports = { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner };// Export the registerUser and loginUser functions to be used in the routes as object