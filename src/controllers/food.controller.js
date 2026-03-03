const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid'); // ✅ correct


async function createFoodItem(req, res) {
    try {
        console.log(req.foodPartner); // Log the food partner information from the request object
        console.log(req.file); // Log the uploaded file information from the request object (video file)
        console.log(req.body); // Log the request body to see the details of the food item being created
        
        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid()); // Call the function to upload the video file to ImageKit and wait for the result
        
        const foodItem = await foodModel.create({
            name: req.body.name, // Get the name of the food item from the request body
            description: req.body.description, // Get the description of the food item from the request body
            video: fileUploadResult, // Save the URL of the uploaded video file from ImageKit
            foodPartner: req.foodPartner._id // Associate the food item with the food partner
        });

        res.status(201).json({ 
            message: 'Food item created successfully', // Send a success response
            foodItem // Send the created food item in the response
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Something went wrong' }); // Send an error response
    }
}

module.exports = {
    createFoodItem // Export the createFoodItem function to be used in the routes
}