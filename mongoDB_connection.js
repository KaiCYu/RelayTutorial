const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://test:testTutorial1@ds245240.mlab.com:45240/kai-relaytutorial'

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { userMongoClient: true });
mongoose.connection
  .once('open', () => console.log('Connection to MongoDB is established...'))
  .on('error', error => console.warn('Error connecting to MongoDB', error));

  module.exports = mongoose;