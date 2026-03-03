const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// user register api 
router.post('/user/register', authController.registerUser);
     //(req, res) => {const { username, password } = req.body;
    // the above part will go into controller
// here only rotes will be there the logic will be in controllers
router.post('/user/login', authController.loginUser); // Dummy login api
router.get('/user/logout', authController.logoutUser); // Dummy logout <api></api>

//FOODPARTNER
router.post('/foodpartner/register', authController.registerFoodPartner);   // Dummy register api for food partner
router.post('/foodpartner/login', authController.loginFoodPartner); // Dummy login api for food partner
router.get('/foodpartner/logout', authController.logoutFoodPartner); // Dummy logout api for food <partner></partner>
module.exports = router;