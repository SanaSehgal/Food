const express = require('express');
const router = express.Router();
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() }); // Configure multer to save uploaded files to memory
/*POST /api/food/  - create a new food item {protected by auth middleware}*/
router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single('video'), foodController.createFoodItem); // This route is protected by the authFoodPartnerMiddleware, which checks if the user is authenticated and has the "food partner" role before allowing access to the createFoodItem controller function.
module.exports = router;