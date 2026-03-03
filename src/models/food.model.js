const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  video: {type : String, required: true},
  description: { type: String, required: true },
  foodPartner: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodPartner', required: true },
}, { timestamps: true });  // ✅ timestamps goes here, inside the schema options

const FoodModel = mongoose.model('Food', foodSchema);
module.exports = FoodModel;