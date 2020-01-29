const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB conectd...');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
