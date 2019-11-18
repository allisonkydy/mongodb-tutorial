const mocha = require('mocha');
const assert = require('assert');

// Describe tests
  // params: string describing test, function that run tests
describe('some demo tests', () => {
  // Create tests
    // it block -- one single test
  it('adds two numbers together', () => {
    assert(2 + 3 === 5);
  });
});