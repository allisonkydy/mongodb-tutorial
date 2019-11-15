// Connection to db
const mongoose = require('mongoose');

// Connect to mongodb using connection string
  // mongodb will create a new db if given does not exist
mongoose.connect('mongodb://localhost/testdb');

// connection.once() == event listener that fires cb once
mongoose.connection.once('open', () => {
  console.log('connection has been made rejoice');
}).on('error', () => {
  console.log('connection error: ', error);
});
