// start server
require('dotenv').config();
const app = require('./app');
const connectDB = require('./src/db/db');

connectDB(); // Connect to MongoDB

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});