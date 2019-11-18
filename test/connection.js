// Connection to db
const mongoose = require('mongoose');

// ES6 Promises
// Use if DeprecationWarning
// mongoose.Promise = global.Promise;

// Connect to the db before tests run
before((done) => {
  // Connect to mongodb using connection string
    // mongodb will create a new db if given does not exist
  mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
  
  // connection.once() == event listener that fires cb once
  mongoose.connection.once('open', () => {
    console.log('connection has been made rejoice');
    done();
  }).on('error', () => {
    console.log('connection error: ', error);
  });
});

