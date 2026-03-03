const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });  // ✅ timestamps goes here, inside the schema options

const User = mongoose.model('User', userSchema);
module.exports = User;
