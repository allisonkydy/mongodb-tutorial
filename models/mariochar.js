const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
  // field: Type
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

// Create Model
  // params: collection, schema
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

// export model
module.exports = MarioChar;
