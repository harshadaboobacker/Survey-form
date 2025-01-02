const mongoose = require('mongoose');
require('dotenv').config( );

exports.connectDB = () => {
    mongoose.connect(process.env.DB_URI)

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));
}