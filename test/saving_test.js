// const mocha = require('mocha'); -- not necessary
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving records', () => {

  it('Saves a record to the database', (done) => {
    
    // create a new mario character
    const char = new MarioChar({
      name: 'Mario'
    });

    // save character to database -- mongoose knows where to save
    char.save()
      .then(() => {
        // true if not saved to db, false if saved
        assert(char.isNew === false);
        // tells mocha that test is done
        done();
      });
  });

});