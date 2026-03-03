const foodModel = require('../models/food.model');

async function createFoodItem(req, res) {
 console.log(req.foodPartner); // Log the food partner information from the request object
 console.log(req.file); // Log the uploaded file information from the request object (video file)
 res.send('Food item created successfully'); // Send a response indicating that the food item was created successfully
 console.log(req.body); // Log the request body to see the details of the food item being created
}

module.exports = {
    createFoodItem
}